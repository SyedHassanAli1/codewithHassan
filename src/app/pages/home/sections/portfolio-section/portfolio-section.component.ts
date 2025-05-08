import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent {

  portfolioItems = [
  { image: 'portfolio-1', filter: 'web' },
  { image: 'portfolio-2', filter: 'web' },
  { image: 'portfolio-3', filter: 'web' },
  { image: 'portfolio-4', filter: 'web' },
  { image: 'portfolio-5', filter: 'web' },
  { image: 'portfolio-6', filter: 'app' },
  { image: 'portfolio-7', filter: 'app' },
  { image: 'portfolio-8', filter: 'app' },
  { image: 'portfolio-9', filter: 'app' }
];

}
