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

  descriptionPart1: string = `I specialize in designing and developing digital products that are both visually appealing and effortless to use. Over the years, I’ve contributed to diverse projects building websites, web apps, and user interfaces that balance user needs with business goals.`;

  descriptionPart2: string = `For me, design isn’t about chasing trends it’s about clarity, consistency, and solving real problems. I enjoy the entire journey: from brainstorming ideas to launching polished products.`;

  descriptionPart3: string = `Curious by nature and driven by learning, I thrive in collaborative environments where ideas turn into impactful solutions. Whether it’s a simple landing page or a complex application, I aim to deliver work that leaves a lasting impression.`;

}