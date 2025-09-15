import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './pages/home/sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './pages/home/sections/about-section/about-section.component';
import { SkillsSectionComponent } from './pages/home/sections/skills-section/skills-section.component';
import { ServicesSectionComponent } from './pages/home/sections/services-section/services-section.component';
import { PortfolioSectionComponent } from './pages/home/sections/portfolio-section/portfolio-section.component';
import { ResumeSectionComponent } from './pages/home/sections/resume-section/resume-section.component';
import { CertificationSectionComponent } from './pages/home/sections/certification-section/certification-section.component';
import { FactsSectionComponent } from './pages/home/sections/facts-section/facts-section.component';
import { TestimonialsSectionComponent } from './pages/home/sections/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './pages/home/sections/contact-section/contact-section.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'skills', component: HomeComponent },
  { path: 'services', component: HomeComponent },
  { path: 'portfolio', component: HomeComponent },
  // { path: 'resume', component: HomeComponent },
  { path: 'experience', component: HomeComponent },
  { path: 'certification', component: HomeComponent },
  { path: 'testimonials', component: HomeComponent },
  { path: 'facts', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: '**', redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
