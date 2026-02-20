import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {

  activeIndex: number | null = null;

  faqs = [
    {
      question: 'Which AWS Certification is right for me?',
      answer: 'It depends on your experience level and career goals. Associate certifications are ideal for beginners, while Professional and Specialty certifications suit experienced professionals.'
    },
    {
      question: 'What is the best way for me to prepare for my exam?',
      answer: 'You can prepare through official AWS training, practice exams, hands-on labs, and real-world project experience.'
    },
    {
      question: 'How do I register for an AWS Certification exam?',
      answer: 'You can register through the AWS Training & Certification portal and schedule your exam online.'
    },
    {
      question: 'I am a minor. Am I eligible to take an AWS Certification exam?',
      answer: 'Yes, minors aged 13–17 can take exams with parental consent.'
    },
    {
      question: 'How long are the certifications valid?',
      answer: 'Most AWS certifications are valid for 3 years.'
    },
    {
      question: 'What are the prerequisites for enrolling?',
      answer: 'There are no strict prerequisites, but basic cloud knowledge is recommended.'
    },
    {
      question: 'What is the cost of certification programs?',
      answer: 'Costs vary depending on certification level, typically between $100–$300.'
    },
    {
      question: 'How much time commitment is required?',
      answer: 'Preparation time varies but usually ranges from 4–12 weeks.'
    },
    {
      question: 'What support is provided during the program?',
      answer: 'You will receive instructor guidance, study materials, and exam preparation resources.'
    }
  ];

  toggleFAQ(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}