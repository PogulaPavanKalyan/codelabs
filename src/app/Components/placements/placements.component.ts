import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;
  scrollInterval: any;

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    if (window.innerWidth <= 480) {
      this.scrollInterval = setInterval(() => {
        if (this.carousel && this.carousel.nativeElement) {
          const el = this.carousel.nativeElement;
          const scrollAmount = el.clientWidth * 0.85 + 15;

          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            el.scrollTo({ left: el.scrollLeft + scrollAmount, behavior: 'smooth' });
          }
        }
      }, 2500);
    }
  }

  stopAutoScroll() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}
