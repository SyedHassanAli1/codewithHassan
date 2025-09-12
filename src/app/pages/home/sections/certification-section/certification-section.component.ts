import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-certification-section',
  templateUrl: './certification-section.component.html',
  styleUrls: ['./certification-section.component.css']
})
export class CertificationSectionComponent {

  certificates = [
    { image: 'google_one', title: 'Google - Found. of User Experience (UX) Design' },
    { image: 'microsoft_one', title: 'Microsoft - Fundamentals of UIUX' },
    { image: 'microsoft_two', title: 'Microsoft - Designing for User Experience' },
    { image: 'microsoft_three', title: 'Microsoft - User Interface Design and Prototyping' },

    { image: 'linkedIn_agile', title: 'LinkedIn - Agile UX Research' },
    { image: 'linkedIn_microInteractions', title: 'LinkedIn - Microinteractions with Figma' },
    { image: 'linkedIn_productDesigner', title: 'LinkedIn - The AI Driven Product Designer' },
    { image: 'linkedIn_solidJs', title: 'LinkedIn - Building Interactive UIs with SolidJS Key' },

    { image: 'calArts_visualElements', title: 'calArts - Visual Elements of User Interface Design' },
    { image: 'jhopkins_webDevelopers', title: 'Jhons Hopkins University - HTML, CSS, and Javascript for Web Developers' }
  ];

  ngAfterViewInit() {
    new Swiper('.myFeatureSlider', {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      centeredSlides: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 500,
        }
      }
    });
  }

}
