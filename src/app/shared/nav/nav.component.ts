import { Component, HostListener, ElementRef } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isMobileNavOpen = false;
  activeSection: string = '';

  showAlert: boolean = false;
  alertTitle: string = '';
  alertMessage: string = '';
  alertType: 'success' | 'error' | 'confirm' = 'success';

  constructor(
    private scrollService: ScrollService,
    private router: Router,
    private elementRef: ElementRef
  ) { }

  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    document.body.classList.toggle('mobile-nav-active', this.isMobileNavOpen);
  }

  navigateToSection(sectionId: string, route: string): void {
    this.isMobileNavOpen = false;
    document.body.classList.remove('mobile-nav-active');

    this.router.navigate([route]).then(() => {
      setTimeout(() => {
        this.scrollService.scrollToSection(sectionId);
      }, 100);
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 50 && rect.bottom >= 50) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    this.activeSection = currentSectionId;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    // Only close if menu is open and click is outside navbar
    if (
      this.isMobileNavOpen &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.isMobileNavOpen = false;
      document.body.classList.remove('mobile-nav-active');
    }
  }

  goToGitHub() {
    window.open('https://github.com/SyedHassanAli1', '_blank');
  }

  // downloadCV() {
  //   const link = document.createElement('a');
  //   link.href = 'assets/Hassan_UIUX_Developer.pdf';  // path relative to assets folder
  //   link.download = 'Hassan_UIUX_Developer.pdf';
  //   link.click();
  // }

  // Scroll Services
  // navigateToSection(sectionId: string,url: string): void {
  //   document.getElementById('closeNavBtn')?.click()
  //   this.scrollService.scrollToSection(sectionId);
  // }



  downloadCount = 0; // track number of downloads
  private pendingDownload: boolean = false; // to handle confirmation

  downloadCV() {
    if (this.downloadCount >= 2) {
      this.showCustomAlert('You have already downloaded the resume 2 times.', 'error', 'Limit Reached');
      return;
    }

    // Instead of confirm(), show custom confirm alert
    this.showCustomAlert('Do you want to download the resume?', 'confirm', 'Confirm Download');
    this.pendingDownload = true;
  }

  confirmDownload(confirmed: boolean) {
    if (confirmed && this.pendingDownload) {
      // Proceed with download
      const link = document.createElement('a');
      link.href = 'assets/Hassan_UIUX_Developer.pdf';
      link.download = 'Hassan_UIUX_Developer.pdf';
      link.click();

      this.downloadCount++;
      this.showCustomAlert('Resume downloaded successfully!', 'success', 'Downloaded');
    }

    // Reset states
    this.pendingDownload = false;
    this.showAlert = false;
  }

  showCustomAlert(message: string, type: 'success' | 'error' | 'confirm' = 'success', title: string = '') {
    this.showAlert = true;
    this.alertTitle = title;
    this.alertMessage = message;
    this.alertType = type as any;
  }

  closeAlert() {
    this.showAlert = false;
    this.pendingDownload = false;
  }


}
