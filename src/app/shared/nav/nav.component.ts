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
  // navigateToSection(sectionId: string,url: string): void {
  //   document.getElementById('closeNavBtn')?.click()
  //   this.scrollService.scrollToSection(sectionId);
  // }

  navigateToSection(sectionId: string, route: string): void {
    document.getElementById('closeNavBtn')?.click();

    // REMOVE mobile-nav-active class from <body>
    document.body.classList.remove('mobile-nav-active');

    this.router.navigate([route]).then(() => {
      setTimeout(() => {
        this.scrollService.scrollToSection(sectionId);
      }, 100);
    });
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

  goToGitHub() {
    window.open('https://github.com/SyedHassanAli1', '_blank');
  }
  
}
