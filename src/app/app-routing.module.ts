import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionComponent } from './pages/home/sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './pages/home/sections/about-section/about-section.component';
import { SkillsSectionComponent } from './pages/home/sections/skills-section/skills-section.component';
import { ServciesSectionComponent } from './pages/home/sections/servcies-section/servcies-section.component';
import { PortfolioSectionComponent } from './pages/home/sections/portfolio-section/portfolio-section.component';
import { ResumeSectionComponent } from './pages/home/sections/resume-section/resume-section.component';
import { FactsSectionComponent } from './pages/home/sections/facts-section/facts-section.component';
import { TestimonialsSectionComponent } from './pages/home/sections/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './pages/home/sections/contact-section/contact-section.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home if no path is provided
  { path: 'home', component: HeroSectionComponent },
  { path: 'about', component: AboutSectionComponent },
  { path: 'skills', component: SkillsSectionComponent },
  { path: 'services', component: ServciesSectionComponent },
  { path: 'portfolio', component: PortfolioSectionComponent },
  { path: 'resume', component: ResumeSectionComponent },
  { path: 'testimonials', component: TestimonialsSectionComponent },
  { path: 'facts', component: FactsSectionComponent },
  { path: 'contact', component: ContactSectionComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
