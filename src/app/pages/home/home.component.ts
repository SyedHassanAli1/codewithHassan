import { Component, ElementRef, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ScrollService } from 'src/app/shared/scroll.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  showBackToTop: boolean = false;

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private scrollService: ScrollService
  ) {

  }

  ngOnInit(): void {
    let url = window.location.href;

    if (url.includes('about')) {
      this.navigateToSection('aboutUsDv');
    }
    else if (url.includes('skills')) {
      this.navigateToSection('skillsDv');
    }

    else if (url.includes('resume')) {
      this.navigateToSection('resumeDv');
    }

    else if (url.includes('services')) {
      this.navigateToSection('servicesDv');
    }

    else if (url.includes('portfolio')) {
      this.navigateToSection('portfolioDv');
    }

    else if (url.includes('facts')) {
      this.navigateToSection('factsDv');
    }

    else if (url.includes('testimonials')) {
      this.navigateToSection('testimonialDv');
    }

    else if (url.includes('contact')) {
      this.navigateToSection('contactDv');
    }
  }

  navigateToSection(sectionId: string): void {
    const elem = document.getElementById(sectionId)
    setTimeout(() => {
      elem?.click();
    }, 500)
  }

  scrollToSection(section: string) {
    switch (section) {
      case 'about':
        this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        this.skillsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        this.servicesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

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
