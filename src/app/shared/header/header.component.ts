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
  selectedCategory: any = null;
  expandedCategory: any = null;
  isMegaMenuOpen: boolean = false;

  courseCategories = [
  {
    title: 'Data Science',
    subtext: 'Data Science with Python, Advanced Data Analytics',
    items: [
      { name: 'Data Science with Python', icon: 'fa-solid fa-chart-line', color: '#2ecc71', route: '#' },
      { name: 'Advanced Data Analytics', icon: 'fa-solid fa-database', color: '#3498db', route: '#' }
    ]
  },
  {
    title: 'Web Development',
    subtext: 'React, Angular, MERN Stack',
    items: [
      { name: 'React', icon: 'fa-brands fa-react', color: '#61dbfb', route: '#' },
      { name: 'Angular', icon: 'fa-brands fa-angular', color: '#dd0031', route: '#' },
      { name: 'MERN', icon: 'fa-solid fa-layer-group', color: '#27ae60', route: '#' }
    ]
  },
  {
    title: 'Business Analysis',
    subtext: 'Business Analysis, Agile, Power BI',
    items: [
      { name: 'Business Analysis Core', icon: 'fa-solid fa-chart-column', color: '#f39c12', route: '#' },
      { name: 'Agile Methodologies', icon: 'fa-solid fa-arrows-spin', color: '#8e44ad', route: '#' },
      { name: 'Power BI', icon: 'fa-solid fa-chart-pie', color: '#f1c40f', route: '#' }
    ]
  },
  {
    title: 'Artificial Intelligence',
    subtext: 'AI Fundamentals, Deep Learning',
    items: [
      { name: 'AI Fundamentals', icon: 'fa-solid fa-brain', color: '#9b59b6', route: '#' },
      { name: 'Deep Learning Specialization', icon: 'fa-solid fa-network-wired', color: '#34495e', route: '#' }
    ]
  },
  {
    title: 'UX/UI Design',
    subtext: 'UX Design, Figma, Adobe XD',
    items: [
      { name: 'Mastering UX/UI', icon: 'fa-brands fa-figma', color: '#f24e1e', route: '#' },
      { name: 'Adobe XD & Figma', icon: 'fa-solid fa-pencil-ruler', color: '#e67e22', route: '#' }
    ]
  },
  {
    title: 'App Development',
    subtext: 'Android Native, iOS Swift',
    items: [
      { name: 'Android Native Dev', icon: 'fa-brands fa-android', color: '#3ddc84', route: '#' },
      { name: 'iOS Swift Pro', icon: 'fa-brands fa-apple', color: '#555555', route: '#' }
    ]
  },
  {
    title: 'Digital Marketing',
    subtext: 'SEO, SEM, Social Media Strategy',
    items: [
      { name: 'SEO & SEM Expert', icon: 'fa-solid fa-magnifying-glass', color: '#3498db', route: '/courses' },
      { name: 'Social Media Strategy', icon: 'fa-brands fa-instagram', color: '#e1306c', route: '#' }
    ]
  },
  {
    title: 'Cybersecurity',
    subtext: 'Ethical Hacking',
    items: [
      { name: 'Ethical Hacking', icon: 'fa-solid fa-shield-halved', color: '#c0392b', route: '#' }
    ]
  },
  {
    title: 'Cloud Engineering',
    subtext: 'AWS, Azure, Google Cloud',
    items: [
      { name: 'AWS Certified Solutions', icon: 'fa-brands fa-aws', color: '#ff9900', route: '#' },
      { name: 'Azure Cloud Expert', icon: 'fa-brands fa-microsoft', color: '#0089d6', route: '#' },
      { name: 'Google Cloud', icon: 'fa-brands fa-google', color: '#4285f4', route: '#' }
    ]
  },
  {
    title: 'Blockchain Engineer',
    subtext: 'Ethereum, Solidity',
    items: [
      { name: 'Ethereum & Solidity', icon: 'fa-brands fa-ethereum', color: '#627eea', route: '#' },
      { name: 'Blockchain Solutions', icon: 'fa-solid fa-link', color: '#16a085', route: '#' }
    ]
  },
  {
    title: 'Mulesoft',
    subtext: 'API Integration Platform',
    items: [
      { name: 'Mulesoft 4 Essentials', icon: 'fa-solid fa-plug', color: '#2c3e50', route: '#' }
    ]
  },
  {
    title: 'SAP FICO',
    subtext: 'SAP Finance Training',
    items: [
      { name: 'SAP FICO Mastery', icon: 'fa-solid fa-building-columns', color: '#2980b9', route: '#' },
      { name: 'SAP Finance Essentials', icon: 'fa-solid fa-file-invoice-dollar', color: '#27ae60', route: '#' }
    ]
  },
  {
    title: 'Software Development',
    subtext: 'Python, Java, MERN, .NET',
    items: [
      { name: 'Python Fullstack', icon: 'fa-brands fa-python', color: '#3776ab', route: '#' },
      { name: 'Java Full Stack', icon: 'fa-brands fa-java', color: '#f89820', route: '#' },
      { name: 'MERN Fullstack', icon: 'fa-solid fa-layer-group', color: '#27ae60', route: '#' },
      { name: 'C# .NET Professional', icon: 'fa-brands fa-microsoft', color: '#512bd4', route: '#' },
      { name: 'MEAN Fullstack', icon: 'fa-brands fa-angular', color: '#dd0031', route: '#' }
    ]
  },
  {
    title: 'DevOps',
    subtext: 'CI/CD, Kubernetes',
    items: [
      { name: 'DevOps & CI/CD', icon: 'fa-solid fa-infinity', color: '#2c3e50', route: '#' },
      { name: 'Kubernetes Mastery', icon: 'fa-brands fa-docker', color: '#2496ed', route: '#' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    subtext: 'Machine Learning, Neural Networks',
    items: [
      { name: 'Machine Learning A-Z', icon: 'fa-solid fa-brain', color: '#9b59b6', route: '#' },
      { name: 'Neural Networks Pro', icon: 'fa-solid fa-network-wired', color: '#34495e', route: '#' }
    ]
  }
];

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
    this.isMegaMenuOpen = false;
    this.expandedCategory = null;

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

  selectCategory(category: any) {
    this.selectedCategory = category;
  }

  toggleMegaMenu() {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }

  onMouseEnter() {
    if (window.innerWidth > 991) {
      this.isMegaMenuOpen = true;
    }
  }

  onMouseLeave() {
    if (window.innerWidth > 991) {
      this.isMegaMenuOpen = false;
    }
  }

  toggleCategory(category: any) {
    if (this.expandedCategory === category) {
      this.expandedCategory = null;
    } else {
      this.expandedCategory = category;
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

    // Initialize with first category
    if (this.courseCategories.length > 0) {
      this.selectedCategory = this.courseCategories[0];
    }
  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}