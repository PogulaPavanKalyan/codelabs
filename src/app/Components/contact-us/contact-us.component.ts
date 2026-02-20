import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.isSubmitting = true;
    // Using your unique FormSubmit security ID for better protection
    const formSubmitId = '6edad403cc5480949b1b192d5d6521ea';
    const formSubmitUrl = `https://formsubmit.co/ajax/${formSubmitId}`;

    // Add subject and template for better reliability
    const payload = {
      ...this.contactData,
      _subject: 'New Message from CodeLabs Contact Form',
      _template: 'table'
    };

    this.http.post(formSubmitUrl, payload).subscribe({
      next: (response: any) => {
        // FormSubmit returns { success: "true", message: "..." }
        if (response.success === 'true' || response.success === true) {
          this.submitSuccess = true;
          this.contactData = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          };
        } else {
          this.submitError = true;
        }
        this.isSubmitting = false;
      },
      error: (error) => {
        this.submitError = true;
        this.isSubmitting = false;
      }
    });
  }
}
