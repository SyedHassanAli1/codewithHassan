import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { NgForm } from '@angular/forms'; // Optional if using template-driven forms

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent {
formData: any = {
  name: '',
  email: '',
  subject: '',
  message: ''

};

  public sendEmail(form: NgForm) {
    debugger
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
          alert('Message sent successfully!');
          form.reset(); // Clear form
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          alert('Something went wrong. Please try again.');
        });
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}
