import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private scrollService: ScrollService) { }

  // Scroll Services
  navigateToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  activeSection: string = '';

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    this.activeSection = currentSectionId;
  }

}
