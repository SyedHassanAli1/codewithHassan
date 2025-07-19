import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {

  services = [
    {
      icon: 'easel',
      title: 'UI/UX Design & Prototyping',
      description: 'Crafting intuitive and user-centric designs for web and mobile applications, using tools like Figma, Adobe XD, and Sketch. Specialized in wireframing, prototyping, and delivering high-fidelity mockups for seamless user experiences.',
      delay: 50
    },
    {
      icon: 'code-slash',
      title: 'Front-End Web Development',
      description: 'Building responsive and high-performance web applications using HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, Angular, and Material UI — ensuring pixel-perfect implementation of designs with optimized performance.',
      delay: 100
    },
    {
      icon: 'palette',
      title: 'Product Design & Branding',
      description: 'Creating impactful digital product designs aligned with your brand identity. Expertise in design systems, visual consistency, and crafting engaging brand experiences through thoughtful UI components.',
      delay: 200
    },
    {
      icon: 'search',
      title: 'Usability Testing & User Research',
      description: 'Conducting in-depth user research, usability testing, and feedback analysis to validate design decisions and enhance user satisfaction. Applying user-centered methodologies to align business goals with user needs.',
      delay: 300
    },
    {
      icon: 'lightning-charge',
      title: 'Webflow & No-Code Website Development',
      description: 'Designing and developing modern, scalable websites using Webflow and no-code tools — perfect for startups, landing pages, and MVPs needing quick turnaround without compromising quality.',
      delay: 400
    },
    {
      icon: 'layers',
      title: 'Design System Creation & Component Libraries',
      description: 'Building scalable design systems and reusable UI components for large-scale applications. Ensuring consistency, accessibility compliance, and seamless collaboration between design and development teams.',
      delay: 500
    }
  ];

}
