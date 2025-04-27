import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(
    private scrollService: ScrollService,
    private router: Router
  ) { }

  // Scroll Services
  navigateToSection(sectionId: string,url: string): void {
    document.getElementById('closeNavBtn')?.click()
    this.scrollService.scrollToSection(sectionId);
    // this.router.navigate([url]);

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
