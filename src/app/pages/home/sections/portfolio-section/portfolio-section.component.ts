import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent {

  portfolioItems = [
    { image: 'portfolio-1', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-2', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-3', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-4', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-5', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-6', filter: 'app', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-7', filter: 'app', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-8', filter: 'app', title: 'Go2Sell - E-Commerce Platform' },
    { image: 'portfolio-9', filter: 'app', title: 'Go2Sell - E-Commerce Platform' }
  ];

}
