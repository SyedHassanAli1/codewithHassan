import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent {

  portfolioItems = [
    // { image: 'portfolio-1', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },
    // { image: 'portfolio-2', filter: 'web', title: 'Go2Sell - E-Commerce Platform' },

    // UI Hero Shots
    { image: 'accounting', filter: 'hero', title: 'Invoisku – Smart Banking & Invoicing App for Businesses' },
    { image: 'engager', filter: 'hero', title: 'Engager – Gamified Onboarding App' },
    { image: 'finance', filter: 'hero', title: 'UI Finance – All-in-One Financial Support Platform' },
    { image: 'healthcare', filter: 'hero', title: 'Healers – Healthcare Companion App' },
    { image: 'llm', filter: 'hero', title: 'Rag Metrices – Evaluation Framework for LLM Applications' },
    { image: 'pdf', filter: 'hero', title: 'AI Room – Smarter PDF Editing App Powered by AI' },

    { image: 'pepsi', filter: 'hero', title: 'Pepsi – Modern Beverage Brand Concept' },
    { image: 'mcLaren', filter: 'hero', title: 'McLaren 675LT - Web Concept' },
    { image: 'discovery', filter: 'hero', title: 'Discovery Channel - Visual Exploration Concept' },
    { image: 'vr-headset', filter: 'hero', title: 'VR Headset – Immersive Reality UI Concept' },
    { image: 'apple', filter: 'hero', title: 'Future of Technology - Smart Desktop App' },
    { image: 'nostalgic-cars', filter: 'hero', title: 'World on Wheels - Car Selling Web App' },


    // Landing Lab
    { image: 'google-store', filter: 'web', title: 'Google - Revamping Store Experience' },
    { image: 'manateq', filter: 'web', title: 'Manateq - Digital Transformation Website Revamp' },
    { image: 'grownest', filter: 'web', title: 'GrowNest - Gardening Landing Concept' },
    { image: 'go2sell', filter: 'web', title: 'Go2Sell - E-Commerce Website Design' },
    { image: 'mv-website', filter: 'web', title: 'Microvision It Solutions - Enterprise Web Concept' },

    // UX Dashboards
    { image: 'medicore', filter: 'dashboard', title: 'MediCore – Healthcare Management System' },
    { image: 'mbrsg', filter: 'dashboard', title: 'MBRSG - School Management System' },

    // App Interfaces
    { image: 'logify', filter: 'app', title: 'Logify – Smart Daily Tracker App' },
    { image: 'lets-chat', filter: 'app', title: 'Lets Chat – Instant Messaging App' },
    { image: 'sony-ps5', filter: 'app', title: 'PS5 Discover – Explore App' },

    // Freestyle
    { image: 'bank-cards', filter: 'other', title: 'Standard Chartered – Banking Cards Revamp' },
    { image: 'mechanic', filter: 'other', title: 'Auto Service - Street banner' },


  ];

}
