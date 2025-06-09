import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent {

  isScreen: number = 1;

  resumeSections = [

    // Objective
    // {
    //   title: 'Summary',
    //   column: 'left',
    //   items: [
    //     {
    //       heading: 'Alex Smith',
    //       description: 'Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.',
    //       list: [
    //         'Portland par 127, Orlando, FL',
    //         '(123) 456-7891',
    //         'alice.barkley@example.com',
    //       ],
    //       duration: '',
    //       location: '',
    //     },
    //   ],
    // },

    // Education
    {
      title: 'Education',
      column: 'left',
      items: [
        {
          heading: 'Master of Fine Arts & Graphic Design',
          duration: '2015 - 2016',
          location: 'Rochester Institute of Technology, Rochester, NY',
          description: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
          list: [],
        },
        {
          heading: 'Bachelor of Fine Arts & Graphic Design',
          duration: '2010 - 2014',
          location: 'Rochester Institute of Technology, Rochester, NY',
          description: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis.',
          list: [],
        },
      ],
    },

    // Certification
    {
      title: 'Certifications',
      column: 'left',
      items: [
        {
          heading: 'Master of Fine Arts & Graphic Design',
          duration: '2015 - 2016',
          location: 'Rochester Institute of Technology, Rochester, NY',
          description: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
          list: [],
        },
        {
          heading: 'Bachelor of Fine Arts & Graphic Design',
          duration: '2010 - 2014',
          location: 'Rochester Institute of Technology, Rochester, NY',
          description: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis.',
          list: [],
        },
      ],
    },

    // Experience
    {
      title: 'Professional Experience',
      column: 'right',
      items: [
        {
          heading: 'Senior Graphic Design Specialist',
          duration: '2019 - Present',
          location: 'Experion, New York, NY',
          description: '',
          list: [
            'Lead in the design, development, and implementation of the graphic, layout, and production communication materials.',
            'Delegate tasks to the 7 members of the design team.',
            'Supervise the assessment of all graphic materials.',
            'Oversee the efficient use of production project budgets.',
          ],
        },
        {
          heading: 'Graphic Design Specialist',
          duration: '2017 - 2018',
          location: 'Stepping Stone Advertising, New York, NY',
          description: '',
          list: [
            'Developed numerous marketing programs (logos, brochures, infographics, etc.).',
            'Managed up to 5 projects or tasks at a given time while under pressure.',
            'Consulted with clients on the most appropriate graphic design.',
            'Created 4+ design presentations per month.',
          ],
        },
      ],
    },

    // Recent Projects
    {
      title: 'Recent Projects',
      column: 'right',
      items: [
        {
          heading: 'Project 1',
          duration: '2022',
          location: 'Freelance',
          description: 'Developed a marketing campaign for a new product launch, including print and digital materials.',
          list: [],
        },
        {
          heading: 'Project 2',
          duration: '2023',
          location: 'Company XYZ',
          description: 'Led the branding redesign of a corporate website with modern UI/UX standards.',
          list: [],
        },
      ],
    },

  ];

  // Getter to filter left column sections
  get leftColumnSections() {
    return this.resumeSections.filter(section => section.column === 'left');
  }

  // Getter to filter right column sections
  get rightColumnSections() {
    return this.resumeSections.filter(section => section.column === 'right');
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Hassan_UIUX_Developer.pdf';  // path relative to assets folder
    link.download = 'Hassan_UIUX_Developer.pdf';
    link.click();
  }
  

}
