import { Component, ViewChild, ElementRef } from '@angular/core';
interface Skill {
  icon: string;
  level: string;
  skill: string;
  category: string;
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent {
  @ViewChild('skillsSection') skillsSection!: ElementRef;

  // 1st Case
  myskills = [
    // Frontend
    { icon: 'html', level: 'Expert', skill: 'HTML5', category: 'frontend' },
    { icon: 'css', level: 'Expert', skill: 'CSS3, SCSS', category: 'frontend' },
    { icon: 'js', level: 'Intermediate', skill: 'JavaScript', category: 'frontend' },
    { icon: 'jquery', level: 'Advanced', skill: 'JQuery & Plugins', category: 'frontend' },
    { icon: 'angular', level: 'Intermediate', skill: 'Angular JS', category: 'frontend' },
    { icon: 'react', level: 'Intermediate', skill: 'React JS', category: 'frontend' },
    { icon: 'tailwind-css', level: 'Expert', skill: 'Tailwind CSS', category: 'frontend' },
    { icon: 'wp', level: 'Advanced', skill: 'WordPress', category: 'frontend' },

    // UI/UX
    { icon: 'ps', level: 'Advanced', skill: 'Adobe Photoshop', category: 'uiux' },
    { icon: 'ai', level: 'Advanced', skill: 'Adobe Illustrator', category: 'uiux' },
    { icon: 'ae', level: 'Intermediate', skill: 'Adobe AfterEffects', category: 'uiux' },
    { icon: 'xd', level: 'Expert', skill: 'Adobe XD', category: 'uiux' },
    { icon: 'figma', level: 'Expert', skill: 'Figma', category: 'uiux' },
    { icon: 'sketch', level: 'Advanced', skill: 'Sketch', category: 'uiux' },
    { icon: 'miro', level: 'Advanced', skill: 'Miro', category: 'uiux' },
    { icon: 'canva', level: 'Expert', skill: 'Canva', category: 'uiux' },

    // Version Control
    { icon: 'git', level: 'Advanced', skill: 'GitHub', category: 'controls' },
    { icon: 'bit', level: 'Advanced', skill: 'Bit Bucket', category: 'controls' },
    { icon: 'jira', level: 'Expert', skill: 'Jira', category: 'controls' },
    { icon: 'clickup', level: 'Expert', skill: 'Clickup', category: 'controls' },

    // Other
    { icon: 'photography', level: 'Expert', skill: 'Photography', category: 'other' },
    { icon: 'videography', level: 'Expert', skill: 'Videography', category: 'other' },
    { icon: 'support', level: 'Expert', skill: 'Windows Support', category: 'other' },
    { icon: 'troubleshooting', level: 'Expert', skill: 'System Troubleshooting', category: 'other' },
    { icon: 'drivers', level: 'Expert', skill: 'Driver & Software Setup', category: 'other' },
    { icon: 'testing', level: 'Expert', skill: 'Usability Testing', category: 'other' },
  ];

  // Other Case
  skills: Skill[] = [
    // Frontend
    { icon: 'html', level: 'Expert', skill: 'HTML5', category: 'frontend' },
    { icon: 'css', level: 'Expert', skill: 'CSS3, SCSS', category: 'frontend' },
    { icon: 'js', level: 'Intermediate', skill: 'JavaScript', category: 'frontend' },
    { icon: 'jquery', level: 'Advanced', skill: 'JQuery & Plugins', category: 'frontend' },
    { icon: 'angular', level: 'Intermediate', skill: 'Angular JS', category: 'frontend' },
    { icon: 'react', level: 'Intermediate', skill: 'React JS', category: 'frontend' },
    { icon: 'tailwind-css', level: 'Expert', skill: 'Tailwind CSS', category: 'frontend' },
    { icon: 'wp', level: 'Advanced', skill: 'WordPress', category: 'frontend' },

    // UI/UX
    { icon: 'ps', level: 'Advanced', skill: 'Adobe Photoshop', category: 'uiux' },
    { icon: 'ai', level: 'Advanced', skill: 'Adobe Illustrator', category: 'uiux' },
    { icon: 'ae', level: 'Intermediate', skill: 'Adobe AfterEffects', category: 'uiux' },
    { icon: 'xd', level: 'Expert', skill: 'Adobe XD', category: 'uiux' },
    { icon: 'figma', level: 'Expert', skill: 'Figma', category: 'uiux' },
    { icon: 'sketch', level: 'Advanced', skill: 'Sketch', category: 'uiux' },
    { icon: 'miro', level: 'Advanced', skill: 'Miro', category: 'uiux' },
    { icon: 'canva', level: 'Expert', skill: 'Canva', category: 'uiux' },

    // Version Control
    { icon: 'git', level: 'Advanced', skill: 'GitHub', category: 'controls' },
    { icon: 'bit', level: 'Advanced', skill: 'Bit Bucket', category: 'controls' },
    { icon: 'jira', level: 'Expert', skill: 'Jira', category: 'controls' },
    { icon: 'clickup', level: 'Expert', skill: 'Clickup', category: 'controls' },

    // Other
    { icon: 'photography', level: 'Expert', skill: 'Photography', category: 'other' },
    { icon: 'videography', level: 'Expert', skill: 'Videography', category: 'other' },
    { icon: 'support', level: 'Expert', skill: 'Windows Support', category: 'other' },
    { icon: 'troubleshooting', level: 'Expert', skill: 'System Troubleshooting', category: 'other' },
    { icon: 'drivers', level: 'Expert', skill: 'Driver & Software Setup', category: 'other' },
    { icon: 'testing', level: 'Expert', skill: 'Usability Testing', category: 'other' },
  ];

  selectedCategory: string = 'all';
  displayedSkills: Skill[] = [];
  showSeeMore: boolean = false;
  showingAll: boolean = false;
  scrollPosition: number = 0;

  ngOnInit() {
    this.filterSkills('all');
  }

  filterSkills(category: string) {
    this.selectedCategory = category;
    this.showingAll = false;

    const filtered = category === 'all' ? this.skills : this.skills.filter(s => s.category === category);

    this.displayedSkills = filtered.slice(0, 8);
    this.showSeeMore = filtered.length > 8 && category === 'all';
  }
  
  seeMore() {
    const filtered = this.selectedCategory === 'all'
      ? this.skills
      : this.skills.filter(s => s.category === this.selectedCategory);

    if (this.showingAll) {
      // Collapse view
      this.displayedSkills = filtered.slice(0, 8);
      this.showingAll = false;

      // Scroll to the skills section
      setTimeout(() => {
        this.skillsSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      // Expand view
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
      this.displayedSkills = filtered;
      this.showingAll = true;
    }

    this.showSeeMore = filtered.length > 8 && this.selectedCategory === 'all';
  }

  
}
