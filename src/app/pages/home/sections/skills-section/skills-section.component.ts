import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {

  skills = [
    // Frontend
    { icon: 'html', percent: '96', skill: 'HTML5', category: 'frontend' },
    { icon: 'css', percent: '96', skill: 'CSS3, SCSS', category: 'frontend' },
    { icon: 'js', percent: '96', skill: 'JavaScript', category: 'frontend' },
    { icon: 'jquery', percent: '96', skill: 'JQuery & Plugins', category: 'frontend' },
    { icon: 'angular', percent: '96', skill: 'Angular JS', category: 'frontend' },
    { icon: 'react', percent: '96', skill: 'React JS', category: 'frontend' },
    { icon: 'tailwind-css', percent: '96', skill: 'Tailwind CSS', category: 'frontend' },
    { icon: 'wp', percent: '96', skill: 'WordPress', category: 'frontend' },

    // UI/UX
    { icon: 'ps', percent: '96', skill: 'Adobe Photoshop', category: 'uiux' },
    { icon: 'ai', percent: '96', skill: 'Adobe Illustrator', category: 'uiux' },
    { icon: 'ae', percent: '96', skill: 'Adobe AfterEffects', category: 'uiux' },
    { icon: 'xd', percent: '96', skill: 'Adobe XD', category: 'uiux' },
    { icon: 'figma', percent: '96', skill: 'Figma', category: 'uiux' },
    { icon: 'sketch', percent: '96', skill: 'Sketch', category: 'uiux' },
    { icon: 'miro', percent: '96', skill: 'Miro', category: 'uiux' },
    { icon: 'canva', percent: '96', skill: 'Canva', category: 'uiux' },

    // Version Control
    { icon: 'git', percent: '96', skill: 'GitHub', category: 'controls' },
    { icon: 'bit', percent: '96', skill: 'Bit Bucket', category: 'controls' },
    { icon: 'jira', percent: '96', skill: 'Jira', category: 'controls' },
    { icon: 'clickup', percent: '96', skill: 'Clickup', category: 'controls' },

    // Other
    { icon: 'photography', percent: '96', skill: 'Photography', category: 'other' },
    { icon: 'videography', percent: '96', skill: 'Videography', category: 'other' },
    { icon: 'support', percent: '96', skill: 'Windows Support', category: 'other' },
    { icon: 'troubleshooting', percent: '96', skill: 'System Troubleshooting', category: 'other' },
    { icon: 'drivers', percent: '96', skill: 'Driver & Software Setup', category: 'other' },
    { icon: 'testing', percent: '96', skill: 'Usability Testing', category: 'other' },
  ];
  
}
