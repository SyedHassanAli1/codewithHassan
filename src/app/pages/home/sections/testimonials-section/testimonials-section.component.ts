import { Component, AfterViewInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements AfterViewInit {

  testimonials = [
    {
      text: "Proin iaculis purus consequat sem cure dignissim donec porttitora entum suscipit...",
      img: "assets/img/testimonials/testimonials-1.jpg",
      name: "Saul Goodman",
      role: "CEO & Founder"
    },
    {
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum...",
      img: "assets/img/testimonials/testimonials-2.jpg",
      name: "Sara Wilsson",
      role: "Designer"
    },
    {
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam...",
      img: "assets/img/testimonials/testimonials-3.jpg",
      name: "Jena Karlis",
      role: "Store Owner"
    }
  ];

  ngAfterViewInit() {
    new Swiper('.testimonials-slider', {
      loop: true,
      autoplay: { delay: 9000, disableOnInteraction: false },
      speed: 800,
      effect: 'slide',
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    });
  }

}
