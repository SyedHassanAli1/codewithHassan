import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('servicesSection') servicesSection!: ElementRef;

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

}
