import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { NgForm } from '@angular/forms'; // Optional if using template-driven forms

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {

  showAlert: boolean = false;
  alertTitle: string = '';
  alertMessage: string = '';
  alertType: 'success' | 'error' = 'success';

  formData: any = {
    name: '',
    email: '',
    subject: '',
    message: ''

  };

  public sendEmail(form: NgForm) {
    if (form.valid) {
      emailjs.send(
        'service_jfkshff',
        'template_fjwcbwe',
        {
          name: this.formData.name,
          email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
        },
        'nfFIwwwmXlYljyD8t'
      )
        .then(() => {
          this.showCustomAlert('Message sent successfully!', 'success', 'Thanks for contacting');
          form.reset();
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          this.showCustomAlert('Something went wrong. Please try again.', 'error', 'Oops! Failed');
        });
    } else {
      this.showCustomAlert('Please fill all fields correctly.', 'error', 'Form Incomplete');
    }
  }

  showCustomAlert(message: string, type: 'success' | 'error' = 'success', title: string = '') {

    this.showAlert = true;
    this.alertTitle = title;
    this.alertMessage = message;
    this.alertType = type;

    // Auto-hide after 5 seconds
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

  closeAlert() {
    this.showAlert = false;
  }

}
