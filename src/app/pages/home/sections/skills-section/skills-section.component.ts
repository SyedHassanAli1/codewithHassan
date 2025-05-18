import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {

skills = [
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

  // skills = [
  //   // Frontend
  //   { icon: 'html', level: 'Expert Practitioner', skill: 'HTML5', category: 'frontend' },
  //   { icon: 'css', level: 'Expert Practitioner', skill: 'CSS3, SCSS', category: 'frontend' },
  //   { icon: 'js', level: 'Proficient Developer', skill: 'JavaScript', category: 'frontend' },
  //   { icon: 'jquery', level: 'Advanced Specialist', skill: 'JQuery & Plugins', category: 'frontend' },
  //   { icon: 'angular', level: 'Proficient Developer', skill: 'Angular JS', category: 'frontend' },
  //   { icon: 'react', level: 'Proficient Developer', skill: 'React JS', category: 'frontend' },
  //   { icon: 'tailwind-css', level: 'Expert Practitioner', skill: 'Tailwind CSS', category: 'frontend' },
  //   { icon: 'wp', level: 'Advanced Specialist', skill: 'WordPress', category: 'frontend' },

  //   // UI/UX
  //   { icon: 'ps', level: 'Advanced Specialist', skill: 'Adobe Photoshop', category: 'uiux' },
  //   { icon: 'ai', level: 'Advanced Specialist', skill: 'Adobe Illustrator', category: 'uiux' },
  //   { icon: 'ae', level: 'Proficient Developer', skill: 'Adobe AfterEffects', category: 'uiux' },
  //   { icon: 'xd', level: 'Expert Practitioner', skill: 'Adobe XD', category: 'uiux' },
  //   { icon: 'figma', level: 'Expert Practitioner', skill: 'Figma', category: 'uiux' },
  //   { icon: 'sketch', level: 'Advanced Specialist', skill: 'Sketch', category: 'uiux' },
  //   { icon: 'miro', level: 'Advanced Specialist', skill: 'Miro', category: 'uiux' },
  //   { icon: 'canva', level: 'Expert Practitioner', skill: 'Canva', category: 'uiux' },

  //   // Version Control
  //   { icon: 'git', level: 'Advanced Specialist', skill: 'GitHub', category: 'controls' },
  //   { icon: 'bit', level: 'Advanced Specialist', skill: 'Bit Bucket', category: 'controls' },
  //   { icon: 'jira', level: 'Expert Practitioner', skill: 'Jira', category: 'controls' },
  //   { icon: 'clickup', level: 'Expert Practitioner', skill: 'Clickup', category: 'controls' },

  //   // Other
  //   { icon: 'photography', level: 'Expert Practitioner', skill: 'Photography', category: 'other' },
  //   { icon: 'videography', level: 'Expert Practitioner', skill: 'Videography', category: 'other' },
  //   { icon: 'support', level: 'Expert Practitioner', skill: 'Windows Support', category: 'other' },
  //   { icon: 'troubleshooting', level: 'Expert Practitioner', skill: 'System Troubleshooting', category: 'other' },
  //   { icon: 'drivers', level: 'Expert Practitioner', skill: 'Driver & Software Setup', category: 'other' },
  //   { icon: 'testing', level: 'Expert Practitioner', skill: 'Usability Testing', category: 'other' },
  // ];

  
}
