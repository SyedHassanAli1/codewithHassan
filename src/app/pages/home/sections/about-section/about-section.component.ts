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

  descriptionPart1: string = `I’m a UI/UX Designer and Frontend Developer who genuinely enjoys solving real problems through clean, thoughtful design. Over the past few years, I’ve worked on a variety of projects—designing and building websites, web apps, and user interfaces that are not only visually appealing but also intuitive to use.`;

  descriptionPart2: string = `My goal is simple: create experiences that feel effortless for users and make sense from a business perspective. I enjoy the process—from sketching early ideas to seeing the final product live and working. I believe good design is less about trends and more about clarity, consistency, and solving the right problems.`;

  descriptionPart3: string = `I'm always learning, always curious, and I love collaborating with others to bring ideas to life. Whether it's a small landing page or a full-scale application, I aim to create work that I’m proud of and that users actually enjoy interacting with.`;

}
