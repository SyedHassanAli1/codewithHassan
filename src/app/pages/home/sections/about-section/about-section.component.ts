import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {

  profileImage: string = 'https://fakeimg.pl/352x352';
  title: string = 'UI/UX Designer & Web Developer';
  intro: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  details: { label: string, value: string, icon: string }[][] = [
    [
      { label: 'Birthday', value: '1 May 1995', icon: 'bi-calendar' },
      { label: 'Website', value: 'www.example.com', icon: 'bi-globe' },
      { label: 'Phone', value: '+123 456 7890', icon: 'bi-phone' },
      { label: 'City', value: 'New York, USA', icon: 'bi-geo-alt' }
    ],
    [
      { label: 'Age', value: '30', icon: 'bi-person' },
      { label: 'Degree', value: 'Master', icon: 'bi-book' },
      { label: 'Email', value: 'email@example.com', icon: 'bi-envelope' },
      { label: 'Freelance', value: 'Available', icon: 'bi-check-circle' }
    ]
  ];
  description: string = `
    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci
    omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque
    neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni
    laudantium dolores.
  `;

}
