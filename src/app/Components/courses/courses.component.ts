import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  faqs = [
    {
      question: 'What will I learn in this course?',
      answer: [
        'Overview of Digital Marketing',
        'Key Concepts',
        'Introduction to Tools',
        'Getting Started'
      ]
    },
    {
      question: 'Who can join this Digital Marketing course?',
      answer: [
        'Students',
        'Job Seekers',
        'Freelancers',
        'Marketing Professionals'
      ]
    },
    {
      question: 'What topics are covered in this course?',
      answer: [
        'SEO',
        'SMM',
        'Google Ads / PPC',
        'Content Marketing'
      ]
    },
    {
      question: 'What job roles can I get after completing the course?',
      answer: [
        'Digital Marketing Executive',
        'SEO Specialist',
        'Social Media Manager',
        'PPC Specialist'
      ]
    },
    {
      question: 'What is the salary after completing a digital marketing course?',
      answer: [
        'Freshers typically earn ₹2.5 LPA – ₹5 LPA in India depending on skills and experience.'
      ]
    }
  ];

  ngOnInit(): void {
    // window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
