import { Component, ViewChild, ElementRef } from '@angular/core';

interface Portfolio {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent {
  @ViewChild('portfoliosSection') portfoliosSection!: ElementRef;

  portfolioItems = [
    // { image: 'portfolio-1', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },
    // { image: 'portfolio-2', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },

    // UI Hero Shots
    { image: 'accounting', title: 'Invoisku – Smart Banking & Invoicing App for Businesses', category: 'frontend' },
    { image: 'engager', title: 'Engager – Gamified Onboarding App', category: 'frontend' },
    { image: 'finance', title: 'UI Finance – All-in-One Financial Support Platform', category: 'frontend' },
    { image: 'healthcare', title: 'Healers – Healthcare Companion App', category: 'frontend' },
    { image: 'llm', title: 'Rag Metrices – Evaluation Framework for LLM Applications', category: 'frontend' },
    { image: 'pdf', title: 'AI Room – Smarter PDF Editing App Powered by AI', category: 'frontend' },

    { image: 'pepsi', title: 'Pepsi – Modern Beverage Brand Concept', category: 'frontend' },
    { image: 'mcLaren', title: 'McLaren 675LT - Web Concept', category: 'frontend' },
    { image: 'discovery', title: 'Discovery Channel - Visual Exploration Concept', category: 'frontend' },
    { image: 'vr-headset', title: 'VR Headset – Immersive Reality UI Concept', category: 'frontend' },
    { image: 'apple', title: 'Future of Technology - Smart Desktop App', category: 'frontend' },
    { image: 'nostalgic-cars', title: 'World on Wheels - Car Selling Web App', category: 'frontend' },

    // Landing Lab
    { image: 'google-store', title: 'Google - Revamping Store Experience', category: 'frontend' },
    { image: 'manateq', title: 'Manateq - Digital Transformation Website Revamp', category: 'frontend' },
    { image: 'grownest', title: 'GrowNest - Gardening Landing Concept', category: 'frontend' },
    { image: 'go2sell', title: 'Go2Sell - E-Commerce Website Design', category: 'frontend' },
    { image: 'mv-website', title: 'Microvision It Solutions - Enterprise Web Concept', category: 'frontend' },

    // UX Dashboards
    { image: 'medicore', title: 'MediCore – Healthcare Management System', category: 'frontend' },
    { image: 'mbrsg', title: 'MBRSG - School Management System', category: 'frontend' },

    // App Interfaces
    { image: 'logify', title: 'Logify – Smart Daily Tracker App', category: 'frontend' },
    { image: 'lets-chat', title: 'Lets Chat – Instant Messaging App', category: 'frontend' },
    { image: 'sony-ps5', title: 'PS5 Discover – Explore App', category: 'frontend' },

    // Freestyle
    { image: 'bank-cards', title: 'Standard Chartered – Banking Cards Revamp', category: 'frontend' },
    { image: 'mechanic', title: 'Auto Service - Street banner', category: 'frontend' },


  ];

  portfolios: Portfolio[] = [
    // UI Hero Shots
    { image: 'accounting', title: 'Invoisku – Smart Banking & Invoicing App for Businesses', category: 'hero' },
    { image: 'engager', title: 'Engager – Gamified Onboarding App', category: 'hero' },
    { image: 'finance', title: 'UI Finance – All-in-One Financial Support Platform', category: 'hero' },
    { image: 'healthcare', title: 'Healers – Healthcare Companion App', category: 'hero' },
    { image: 'llm', title: 'Rag Metrices – Evaluation Framework for LLM Applications', category: 'hero' },
    { image: 'pdf', title: 'AI Room – Smarter PDF Editing App Powered by AI', category: 'hero' },

    { image: 'pepsi', title: 'Pepsi – Modern Beverage Brand Concept', category: 'hero' },
    { image: 'mcLaren', title: 'McLaren 675LT - Web Concept', category: 'hero' },
    { image: 'discovery', title: 'Discovery Channel - Visual Exploration Concept', category: 'hero' },
    { image: 'vr-headset', title: 'VR Headset – Immersive Reality UI Concept', category: 'hero' },
    { image: 'apple', title: 'Future of Technology - Smart Desktop App', category: 'hero' },
    { image: 'nostalgic-cars', title: 'World on Wheels - Car Selling Web App', category: 'hero' },

    // Landing Lab
    { image: 'google-store', title: 'Google - Revamping Store Experience', category: 'web' },
    { image: 'manateq', title: 'Manateq - Digital Transformation Website Revamp', category: 'web' },
    { image: 'grownest', title: 'GrowNest - Gardening Landing Concept', category: 'web' },
    { image: 'go2sell', title: 'Go2Sell - E-Commerce Website Design', category: 'web' },
    { image: 'mv-website', title: 'Microvision It Solutions - Enterprise Web Concept', category: 'web' },

    // UX Dashboards
    { image: 'medicore', title: 'MediCore – Healthcare Management System', category: 'dashboard' },
    { image: 'mbrsg', title: 'MBRSG - School Management System', category: 'dashboard' },

    // App Interfaces
    { image: 'logify', title: 'Logify – Smart Daily Tracker App', category: 'app' },
    { image: 'lets-chat', title: 'Lets Chat – Instant Messaging App', category: 'app' },
    { image: 'sony-ps5', title: 'PS5 Discover – Explore App', category: 'app' },

    // Freestyle
    { image: 'bank-cards', title: 'Standard Chartered – Banking Cards Revamp', category: 'other' },
    { image: 'mechanic', title: 'Auto Service - Street banner', category: 'other' },
  ];

  selectedCategory: string = 'all';
  displayedPortfolios: Portfolio[] = [];
  showSeeMore: boolean = false;
  showingAll: boolean = false;
  scrollPosition: number = 0;

  ngOnInit() {
    this.filterPortfolios('all');
  }

  filterPortfolios(category: string) {
    this.selectedCategory = category;
    this.showingAll = false;

    const filtered = category === 'all' ? this.portfolios : this.portfolios.filter(p => p.category === category);

    this.displayedPortfolios = filtered.slice(0, 8);
    this.showSeeMore = filtered.length > 8 && category === 'all';
  }

  seeMore() {
    const filtered = this.selectedCategory === 'all'
      ? this.portfolios
      : this.portfolios.filter(p => p.category === this.selectedCategory);

    if (this.showingAll) {
      // Collapse view
      this.displayedPortfolios = filtered.slice(0, 8);
      this.showingAll = false;

      // Scroll to the skills section
      setTimeout(() => {
        this.portfoliosSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      // Expand view
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
      this.displayedPortfolios = filtered;
      this.showingAll = true;
    }

    this.showSeeMore = filtered.length > 8 && this.selectedCategory === 'all';
  }

}
