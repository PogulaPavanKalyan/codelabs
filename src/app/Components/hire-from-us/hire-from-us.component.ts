import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-hire-from-us',
  templateUrl: './hire-from-us.component.html',
  styleUrls: ['./hire-from-us.component.scss']
})
export class HireFromUsComponent {

  // Form Model
  contactData = {
    firstName: '',
    lastName: '',
    companyName: '',
    designation: '',
    email: '',
    phoneNumber: '',
    message: '',
    terms: false
  };

  // UI States
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private http: HttpClient) { }

  onSubmit(): void {

    // ✅ Validate terms checkbox
    if (!this.contactData.terms) {
      alert('Please accept terms and conditions');
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // ✅ FormSubmit endpoint
    const url = 'https://formsubmit.co/ajax/codelabsit@gmail.com';

    // ✅ Proper x-www-form-urlencoded body
    const body = new HttpParams({
      fromObject: {
        firstName: this.contactData.firstName,
        lastName: this.contactData.lastName,
        companyName: this.contactData.companyName,
        designation: this.contactData.designation,
        email: this.contactData.email,
        phoneNumber: this.contactData.phoneNumber,
        message: this.contactData.message,
        _subject: 'Hire Request from CodeLabs',
        _template: 'table',
        _captcha: 'false'
      }
    });

    // ✅ POST request (NO JSON, NO CORS issue)
    this.http.post(url, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.isSubmitting = false;

        // ✅ Reset form
        this.contactData = {
          firstName: '',
          lastName: '',
          companyName: '',
          designation: '',
          email: '',
          phoneNumber: '',
          message: '',
          terms: false
        };
      },
      error: () => {
        this.submitError = true;
        this.isSubmitting = false;
      }
    });
  }
}