import { Component, OnInit, HostListener } from '@angular/core';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Hide navbar after 100px
    this.isScrolled = scrollOffset > 100;

    // Show sticky navbar after 400px
    this.isSticky = scrollOffset > 400;
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
