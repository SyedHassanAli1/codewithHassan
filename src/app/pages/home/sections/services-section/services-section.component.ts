import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {

  // services = [
  //   {
  //     icon: 'easel',
  //     title: 'UI/UX Design & Prototyping',
  //     description: 'Crafting intuitive and user-centric designs for web and mobile applications, using tools like Figma, Adobe XD, and Sketch. Specialized in wireframing, prototyping, and delivering high-fidelity mockups for seamless user experiences.',
  //     delay: 50
  //   },
  //   {
  //     icon: 'code-slash',
  //     title: 'Front-End Web Development',
  //     description: 'Building responsive and high-performance web applications using HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, Angular, and Material UI — ensuring pixel-perfect implementation of designs with optimized performance.',
  //     delay: 100
  //   },
  //   {
  //     icon: 'palette',
  //     title: 'Product Design & Branding',
  //     description: 'Creating impactful digital product designs aligned with your brand identity. Expertise in design systems, visual consistency, and crafting engaging brand experiences through thoughtful UI components.',
  //     delay: 200
  //   },
  //   {
  //     icon: 'search',
  //     title: 'Usability Testing & User Research',
  //     description: 'Conducting in-depth user research, usability testing, and feedback analysis to validate design decisions and enhance user satisfaction. Applying user-centered methodologies to align business goals with user needs.',
  //     delay: 300
  //   },
  //   {
  //     icon: 'lightning-charge',
  //     title: 'Webflow & No-Code Website Development',
  //     description: 'Designing and developing modern, scalable websites using Webflow and no-code tools — perfect for startups, landing pages, and MVPs needing quick turnaround without compromising quality.',
  //     delay: 400
  //   },
  //   {
  //     icon: 'layers',
  //     title: 'Design System Creation & Component Libraries',
  //     description: 'Building scalable design systems and reusable UI components for large-scale applications. Ensuring consistency, accessibility compliance, and seamless collaboration between design and development teams.',
  //     delay: 500
  //   }
  // ];

  services = [
    {
      icon: 'easel',
      title: 'UI/UX Design & Prototyping',
      description: 'Delivering modern UI/UX design services for web and mobile apps. From wireframes to high-fidelity prototypes, I create user-centric interfaces using Figma, Adobe XD, and Sketch. The focus is on intuitive navigation, clean visuals, and seamless user journeys that improve engagement and satisfaction.',
      delay: 50
    },
    {
      icon: 'code-slash',
      title: 'Front-End Web Development',
      description: 'Building fast, responsive, and pixel-perfect websites with HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, Angular, and Material UI. My front-end development services ensure smooth performance, accessibility, and optimized code—turning designs into functional, scalable digital products.',
      delay: 100
    },
    {
      icon: 'palette',
      title: 'Product Design & Branding',
      description: 'Designing impactful digital products that align with your brand identity. I specialize in creating consistent design systems, engaging visual styles, and user-friendly interfaces that strengthen your brand presence and enhance customer trust across platforms.',
      delay: 200
    },
    {
      icon: 'search',
      title: 'User Research & Usability Testing',
      description: 'Improving digital products through in-depth user research, usability testing, and feedback analysis. By applying user-centered design methodologies, I validate design decisions and ensure the final product balances business goals with real user needs.',
      delay: 300
    },
    {
      icon: 'lightning-charge',
      title: 'Webflow & No-Code Website Dev',
      description: 'Helping startups and businesses launch quickly with professional no-code website development. I design and build scalable websites using Webflow and other no-code tools—ideal for landing pages, MVPs, and modern business websites that need speed without compromising quality.',
      delay: 400
    },
    {
      icon: 'layers',
      title: 'Design Systems & Comp. Libraries',
      description: 'Creating scalable design systems and reusable UI component libraries for enterprise and startup applications. These systems improve design consistency, ensure accessibility compliance, and make collaboration between design and development teams effortless and efficient.',
      delay: 500
    }
  ];

}
