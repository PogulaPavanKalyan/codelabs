import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-interest-card',
  templateUrl: './course-interest-card.component.html',
  styleUrls: ['./course-interest-card.component.scss']
})
export class CourseInterestCardComponent {
  contactData = {
    fullName: '',
    email: '',
    countryCode: '+91',
    mobileNumber: '',
    batches: '',
    city: ''
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
    const formSubmitId = 'codelabsit@gmail.com';
    const formSubmitUrl = `https://formsubmit.co/ajax/${formSubmitId}`;

    // Add subject and template for better reliability
    const payload = {
      ...this.contactData,
      phone: `${this.contactData.countryCode} ${this.contactData.mobileNumber}`,
      _subject: 'New Course Enrollment Interest from Card',
      _template: 'table'
    };

    // Remove internal fields from payload if necessary
    delete (payload as any).mobileNumber;
    delete (payload as any).countryCode;

    this.http.post(formSubmitUrl, payload).subscribe({
      next: (response: any) => {
        if (response.success === 'true' || response.success === true) {
          this.submitSuccess = true;
          this.contactData = {
            fullName: '',
            email: '',
            countryCode: '+91',
            mobileNumber: '',
            batches: '',
            city: ''
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
