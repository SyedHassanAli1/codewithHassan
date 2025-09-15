import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent {

  isScreen: number = 1;

  showRightColumn: boolean = false;


  screenWidth: number = window.innerWidth;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  }


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
          heading: 'BSCS – Bachelor\s of Computer Science',
          duration: '2018 – 2022',
          location: 'Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST), Karachi, Pakistan',
          description: '',
          list: [
            'Studied core CS subjects including programming, databases, and software engineering.',
            'Took electives in German, psychology, and applied physics.',
            'Built strong problem-solving and technical skills.',
            'Courses were interconnected and industry-relevant.',
          ],
        },
        {
          heading: 'HSC – Pre-Engineering',
          duration: '2016 – 2018',
          location: 'Govt. Forman College, Karachi, Pakistan',
          description: '',
          list: [
            'Focused on Mathematics, Physics, and Chemistry.',
            'Learned calculus topics like integration and derivatives.',
            'Built analytical and quantitative skills.',
            'Prepared for engineering and tech fields.',
          ],
        },
        {
          heading: 'SSC – Computer Science',
          duration: '2014 – 2016',
          location: 'Happy Palace Grammar School, Karachi, Pakistan',
          description: '',
          list: [
            'Majored in Computer Science, Physics, and Chemistry.',
            'Scored 100/100 in Computer Science in board exams.',
            'Gained early exposure to programming concepts.',
            'Developed strong academic foundation in tech.',
          ],
        },
      ],
    },

    // Certification
    // {
    //   title: 'Certifications',
    //   column: 'left',
    //   items: [
    //     {
    //       heading: 'Master of Fine Arts & Graphic Design',
    //       duration: '2015 - 2016',
    //       location: 'Rochester Institute of Technology, Rochester, NY',
    //       description: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit.',
    //       list: [],
    //     },
    //     {
    //       heading: 'Bachelor of Fine Arts & Graphic Design',
    //       duration: '2010 - 2014',
    //       location: 'Rochester Institute of Technology, Rochester, NY',
    //       description: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis.',
    //       list: [],
    //     },
    //   ],
    // },

    // Experience
    {
      title: 'Professional Experience',
      column: 'right',
      items: [
        {
          heading: 'Frontend Developer & UI/UX Designer',
          duration: 'Jul 2022 – Present',
          location: 'Microvision IT Solutions — Dubai, UAE',
          description: '',
          list: [
            'Delivered CRM and mobile apps that improved user experience and business efficiency.',
            'Redesigned company website using Angular and PHP, enhancing UX and UI.',
            'Contributed to a scalable multi-tenant system using PHP & Laravel.',
            'Conducted UX research and testing to align design with user needs.',
          ],
        },
        {
          heading: 'Web Designer & Developer',
          duration: 'Feb 2021 – Jun 2022',
          location: 'Hashtag Marketing — Karachi, Pakistan',
          description: '',
          list: [
            'Designed responsive websites to boost client branding and presence.',
            'Collaborated with teams to deliver high-quality digital solutions.',
            'Created visuals to support marketing and social media campaigns.',
            'Ensured consistent design standards across projects.',
          ],
        },
        {
          heading: 'Design & Development Intern',
          duration: 'Aug 2020 – Nov 2020',
          location: 'Interns Pakistan — Karachi, Pakistan',
          description: '',
          list: [
            'Gained practical experience in UI/UX and front-end design.',
            'Supported senior designers in wireframes and prototypes.',
            'Assisted in front-end development tasks for web apps.',
            'Learned design tools and best practices in a team setting.',
          ],
        },
      ],
    },

    // Recent Projects
    // {
    //   title: 'Recent Projects',
    //   column: 'right',
    //   items: [
    //     {
    //       heading: 'Project 1',
    //       duration: '2022',
    //       location: 'Freelance',
    //       description: 'Developed a marketing campaign for a new product launch, including print and digital materials.',
    //       list: [],
    //     },
    //     {
    //       heading: 'Project 2',
    //       duration: '2023',
    //       location: 'Company XYZ',
    //       description: 'Led the branding redesign of a corporate website with modern UI/UX standards.',
    //       list: [],
    //     },
    //   ],
    // },

  ];

  // Getter to filter left column sections
  get leftColumnSections() {
    return this.resumeSections.filter(section => section.column === 'left');
  }

  // Getter to filter right column sections
  get rightColumnSections() {
    return this.resumeSections.filter(section => section.column === 'right');
  }

  // downloadCV() {
  //   const link = document.createElement('a');
  //   link.href = 'assets/Hassan_UIUX_Developer.pdf';  // path relative to assets folder
  //   link.download = 'Hassan_UIUX_Developer.pdf';
  //   link.click();
  // }

}
