import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-buttons',
  templateUrl: './floating-buttons.component.html',
  styleUrls: ['./floating-buttons.component.css']
})
export class FloatingButtonsComponent {

  showBackToTop: boolean = false;

  // Detect scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.showBackToTop = scrollY > 20;
  }
  
  // Scroll to top function
  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
