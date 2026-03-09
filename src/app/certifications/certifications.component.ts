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
      question: 'Who can enroll in these certification programs?',
      answer: 'These certification programs are designed for students, IT professionals, beginners, and working professionals who want to upgrade their skills or switch to high-demand technology careers.'
    },
    {
      question: 'Do I need prior experience to join a certification course?',
      answer: 'Some certifications recommend basic knowledge in IT or programming, but many courses include beginner-friendly modules to help you start from scratch.'
    },
    {
      question: 'Are these certifications recognized internationally?',
      answer: 'Yes. Certifications such as AWS, PMP, Cisco, SAP, and Cyber Security are globally recognized and valued by top companies across industries.'
    },
    {
      question: 'How long does it take to complete a certification program?',
      answer: 'Most certification programs can be completed within 4 to 12 weeks depending on the certification level and the learner’s pace.'
    },
    {
      question: 'Will I get hands-on training during the program?',
      answer: 'Yes. Our certification programs include practical labs, real-world projects, and case studies to help you gain hands-on experience.'
    },
    {
      question: 'Do you provide exam preparation support?',
      answer: 'Yes. We provide exam preparation materials, mock tests, study guides, and expert mentorship to help you pass the certification exam.'
    },
    {
      question: 'Will I receive a certificate after completing the course?',
      answer: 'Yes. After completing the training and passing the certification exam, you will receive a certification from the respective certification authority.'
    },
    {
      question: 'What career opportunities are available after certification?',
      answer: 'Certified professionals can pursue roles such as Cloud Engineer, Data Scientist, Network Engineer, Cyber Security Analyst, Project Manager, and SAP Consultant.'
    },
    {
      question: 'How do I choose the right certification for my career?',
      answer: 'Choosing the right certification depends on your career goals. For example, AWS is ideal for cloud careers, PMP for project management, Cisco for networking, and Cyber Security certifications for security roles.'
    }
  ];

  toggleFAQ(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}