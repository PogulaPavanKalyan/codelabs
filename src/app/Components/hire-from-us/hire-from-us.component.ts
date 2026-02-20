import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hire-from-us',
  templateUrl: './hire-from-us.component.html',
  styleUrls: ['./hire-from-us.component.scss']
})
export class HireFromUsComponent {

  contactData = {
    firstName: '',
    lastName: '',
    companyName: '',
    designation: '',
    email: '',
    phoneNumber: '',
    terms: false
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // Using your unique FormSubmit security ID
    const formSubmitId = '6edad403cc5480949b1b192d5d6521ea';
    const formSubmitUrl = `https://formsubmit.co/ajax/${formSubmitId}`;

    // Add subject and template for better reliability
    const payload = {
      ...this.contactData,
      _subject: 'New Talent Inquiry from Hire From Us Page',
      _template: 'table'
    };

    this.http.post(formSubmitUrl, payload).subscribe({
      next: (response: any) => {
        if (response.success === 'true' || response.success === true) {
          this.submitSuccess = true;
          this.contactData = {
            firstName: '',
            lastName: '',
            companyName: '',
            designation: '',
            email: '',
            phoneNumber: '',
            terms: false
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
