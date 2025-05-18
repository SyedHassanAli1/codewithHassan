import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const options = {
      strings: ["", "UI/ UX Designer", "Frontend Developer", "Interface Crafter", "Problem Solver", "Pixel Perfectionist", "Code meets Creativity", "Human-Centered Thinker", "Design - Driven Developer"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
      // showCursor: false
    };
    new Typed('.animate-text', options);
  }

}
