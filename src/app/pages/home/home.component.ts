import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ScrollService } from 'src/app/shared/scroll.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showBackToTop: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.handleScrollOnRoute();
  }

  handleScrollOnRoute() {
    const path = this.router.url.replace('/', '') || 'hero-section';
    const sectionMap: { [key: string]: string } = {
      '': 'hero-section',
      'about': 'about-section',
      'skills': 'skills-section',
      'resume': 'resume-section',
      'portfolio': 'portfolio-section',
      'services': 'services-section',
      'contact': 'contact-section'

    };

    const sectionId = sectionMap[path];
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

}
