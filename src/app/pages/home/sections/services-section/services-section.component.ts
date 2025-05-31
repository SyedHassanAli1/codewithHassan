import { Component } from '@angular/core';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css']
})
export class ServicesSectionComponent {

  services = [
    {
      icon: 'briefcase',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delay: 50
    },
    {
      icon: 'briefcase',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delay: 100
    },
    {
      icon: 'briefcase',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delay: 200
    },
    {
      icon: 'briefcase',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delay: 300
    },
    {
      icon: 'briefcase',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delay: 400
    },
    {
      icon: 'briefcase',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      delay: 500
    }
  ];

}
