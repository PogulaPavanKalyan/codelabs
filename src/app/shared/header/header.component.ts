import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentRouteName: string = '';
  isScrolled: boolean = false;
  isSticky: boolean = false;
  isMobileMenuOpen: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Hide navbar after 50px to get out of the way early
    this.isScrolled = scrollOffset > 50;

    // Show sticky navbar after 200px (earlier than 400px for a smoother experience)
    this.isSticky = scrollOffset > 200;

    // Close mobile menu on scroll if open
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    // If click is outside the header component, close the menu
    if (!this.elementRef.nativeElement.contains(event.target)) {
      if (this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;

    // Blur the active element to clear :focus-within states on desktop/laptop
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    // Remove the 'show' class from the Bootstrap collapse if it exists
    const navbarCollapse = document.getElementById('navlist');
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Get the current route after navigation ends
      const route = this.getChild(this.activatedRoute);
      route.data.subscribe(data => {
        this.currentRouteName = data['title'] || this.router.url;
        console.log('Current Route Name:', this.currentRouteName);
      });

      // Close mobile menu on route change
      this.closeMobileMenu();
    });
  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
