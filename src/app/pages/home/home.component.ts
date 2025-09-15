import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    // Check if page was refreshed
    if (performance.navigation.type === 1) {
      this.router.navigateByUrl('/'); // redirect to home on refresh
    }

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.handleScrollOnRoute();
      });
  }

  handleScrollOnRoute() {
    const path = this.router.url.replace('/', '') || 'hero-section';

    const sectionMap: { [key: string]: string } = {
      '': 'hero-section',
      'about': 'about-section',
      'skills': 'skills-section',
      'experience': 'experience-section',
      'certification': 'certification-section',
      'portfolio': 'portfolio-section',
      'services': 'services-section',
      'contact': 'contact-section'
    };

    const sectionId = sectionMap[path];
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }
}
