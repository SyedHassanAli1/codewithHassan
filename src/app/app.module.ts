import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';
import { ServiceCardComponent } from './shared/service-card/service-card.component';
import { PortfolioCardComponent } from './shared/portfolio-card/portfolio-card.component';
import { CountBoxComponent } from './shared/count-box/count-box.component';
import { SkillProgressComponent } from './shared/skill-progress/skill-progress.component';
import { AboutHeaderComponent } from './shared/about-header/about-header.component';
import { AboutSectionComponent } from './pages/home/sections/about-section/about-section.component';
import { HeroSectionComponent } from './pages/home/sections/hero-section/hero-section.component';
import { FactsSectionComponent } from './pages/home/sections/facts-section/facts-section.component';
import { SkillsSectionComponent } from './pages/home/sections/skills-section/skills-section.component';
import { ResumeSectionComponent } from './pages/home/sections/resume-section/resume-section.component';
import { CertificationSectionComponent } from './pages/home/sections/certification-section/certification-section.component';
import { PortfolioSectionComponent } from './pages/home/sections/portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from './pages/home/sections/services-section/services-section.component';
import { TestimonialsSectionComponent } from './pages/home/sections/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './pages/home/sections/contact-section/contact-section.component';
import { HomeComponent } from './pages/home/home.component';
import { IconTagComponent } from './shared/icon-tag/icon-tag.component';
import { InputComponent } from './shared/input/input.component';
import { TextareaComponent } from './shared/textarea/textarea.component';
import { FormsModule } from '@angular/forms';
import { SkillCardComponent } from './shared/skill-card/skill-card.component';
import { FloatingButtonsComponent } from './shared/floating-buttons/floating-buttons.component';
import { NgButtonComponent } from './shared/ng-button/ng-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CertificateCardComponent } from './shared/certificate-card/certificate-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    FactsSectionComponent,
    SkillsSectionComponent,
    ServicesSectionComponent,
    ResumeSectionComponent,
    PortfolioSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    SectionTitleComponent,
    ServiceCardComponent,
    PortfolioCardComponent,
    CountBoxComponent,
    SkillProgressComponent,
    AboutHeaderComponent,
    IconTagComponent,
    InputComponent,
    TextareaComponent,
    SkillCardComponent,
    FloatingButtonsComponent,
    NgButtonComponent,
    CertificationSectionComponent,
    CertificateCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HeroSectionComponent,
    AboutSectionComponent,
    FactsSectionComponent,
    SkillsSectionComponent,
    ResumeSectionComponent,
    PortfolioSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
