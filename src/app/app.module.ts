import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SectionTitleComponent } from './shared/section-title/section-title.component';
import { ServiceCardComponent } from './shared/service-card/service-card.component';
import { PortfolioCardComponent } from './shared/portfolio-card/portfolio-card.component';
import { CountBoxComponent } from './shared/count-box/count-box.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    SkillsComponent,
    ServicesComponent,
    ContactComponent,
    SectionTitleComponent,
    ServiceCardComponent,
    PortfolioCardComponent,
    CountBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
