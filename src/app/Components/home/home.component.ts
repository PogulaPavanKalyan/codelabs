import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Course {
  title: string;
  image: string;
  mode: string;
  duration: string;
  startDate: string;
  lectureVideos: string;
  projects: string;
  internship: string;
  originalPrice: string;
  discountedPrice: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  courses: Course[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isExploreMore: boolean = false;
  private inactivityTimer: any;
  categories: Category[] = [
    {
      id: 'trending',
      name: 'Trending Courses',
      courses: []
    },
    {
      id: 'all',
      name: 'Most Popular',
      courses: [] // Will be populated dynamically
    },
    {
      id: 'datascience',
      name: 'Data Science',
      courses: [
        {
          title: 'Data Science',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '15,000.00',
          isPopular: true
        },
        {
          title: 'Advanced Data Analytics',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '30,000.00',
          discountedPrice: '18,500.00'
        }
      ]
    },
    {
      id: 'webdev',
      name: 'Web Development',
      courses: [
        {
          title: 'React',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '15,000.00'
        },
        {
          title: 'Angular',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '22,000.00',
          discountedPrice: '12,500.00'
        },
        {
          title: 'Mern',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '22,000.00',
          discountedPrice: '12,500.00'
        }
      ]
    },
    {
      id: 'business',
      name: 'Business Analysis',
      courses: [
        {
          title: 'Selenium',
          image: '../../../assets/images/landingpage/Course/Selenium.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '20,000.00',
          discountedPrice: '10,000.00'
        },
        {
          title: 'Agile Methodologies',
          image: '../../../assets/images/landingpage/Course/Android Native.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '18,000.00',
          discountedPrice: '9,500.00'
        },
        {
          title: 'Power Bi',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '22,000.00',
          discountedPrice: '12,500.00'
        }
      ]
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      courses: [
        {
          title: 'Artificial Intelligence',
          image: '../../../assets/images/landingpage/Course/Mac Native Swift.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '40,000.00',
          discountedPrice: '25,000.00'
        },
        {
          title: 'Flutter',
          image: '../../../assets/images/landingpage/Course/Flutter.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '45,000.00',
          discountedPrice: '28,000.00'
        },
        {
          title: 'Python with Gen AI',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '30,000.00',
          discountedPrice: '18,500.00'
        }
      ]
    },
    {
      id: 'uxui',
      name: 'UX/UI Design',
      courses: [
        {
          title: 'UI/UX Mastering',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '30,000.00',
          discountedPrice: '18,000.00'
        },
        {
          title: 'Adobe XD & Figma',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '14,000.00'
        },
        {
          title: 'UI/UX with AI',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '35,000.00',
          discountedPrice: '22,000.00'
        }
      ]
    },
    {
      id: 'appdev',
      name: 'App Development',
      courses: [
        {
          title: 'Android Native',
          image: '../../../assets/images/landingpage/Course/Android Native.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '35,000.00',
          discountedPrice: '22,000.00'
        },
        {
          title: 'Mac Native Swift',
          image: '../../../assets/images/landingpage/Course/Mac Native Swift.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '40,000.00',
          discountedPrice: '25,000.00'
        }
      ]
    },
    {
      id: 'digitalm',
      name: 'Digital Marketing',
      courses: [
        {
          title: 'SEO & SEM Expert',
          image: '../../../assets/images/landingpage/Course/Selenium.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '15,000.00',
          discountedPrice: '8,500.00'
        },
        {
          title: 'Digital Marketing',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '15,000.00',
          discountedPrice: '8,500.00'
        }
      ]
    },
    {
      id: 'cyber',
      name: 'Cybersecurity',
      courses: [
        {
          title: 'Ethical Hacking',
          image: '../../../assets/images/landingpage/Course/Android Native.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '40,000.00',
          discountedPrice: '25,000.00'
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Engineer/Architect',
      courses: [
        {
          title: 'AWS Certified Solutions',
          image: '../../../assets/images/landingpage/Course/Mac Native Swift.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '45,000.00',
          discountedPrice: '30,000.00'
        },
        {
          title: 'Azure Cloud Expert',
          image: '../../../assets/images/landingpage/Course/Flutter.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '45,000.00',
          discountedPrice: '30,000.00'
        },
        {
          title: 'Google Cloud',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '22,000.00',
          discountedPrice: '12,500.00'
        }
      ]
    },
    {
      id: 'blockchain',
      name: 'Blockchain Engineer',
      courses: [
        {
          title: 'Ethereum & Solidity',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '50,000.00',
          discountedPrice: '35,000.00'
        },
        {
          title: 'Blockchain Solutions',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '50,000.00',
          discountedPrice: '35,000.00'
        }
      ]
    },
    {
      id: 'mulesoft',
      name: 'Mulesoft',
      courses: [
        {
          title: 'Mulesoft 4 Essentials',
          image: '../../../assets/images/landingpage/Course/Selenium.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '40,000.00',
          discountedPrice: '25,000.00'
        }
      ]
    },
    {
      id: 'sapfico',
      name: 'SAP FICO',
      courses: [
        {
          title: 'SAP FICO Mastery',
          image: '../../../assets/images/landingpage/Course/Mac Native Swift.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '35,000.00',
          discountedPrice: '20,000.00'
        },
        {
          title: 'SAP Finance Essentials',
          image: '../../../assets/images/landingpage/Course/Flutter.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '35,000.00',
          discountedPrice: '20,000.00'
        }
      ]
    },
    {
      id: 'software',
      name: 'Software Development',
      courses: [
        {
          title: 'Python Full Stack',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '15,000.00',
          isPopular: true
        },
        {
          title: 'Java Full Stack',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '15,000.00'
        },
        {
          title: 'Mern Fullstack',
          image: '../../../assets/images/python.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '15,000.00'
        },
        {
          title: 'C# .NET Professional',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '15,000.00'
        },
        {
          title: 'Mean FullStack',
          image: '../../../assets/images/landingpage/Course/UI Technologies.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '25,000.00',
          discountedPrice: '15,000.00'
        }
      ]
    },
    {
      id: 'devops',
      name: 'Devops',
      courses: [
        {
          title: 'DevOps & CI/CD',
          image: '../../../assets/images/landingpage/Course/Selenium.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '35,000.00',
          discountedPrice: '22,000.00'
        },
        {
          title: 'Kubernetes Mastery',
          image: '../../../assets/images/landingpage/Course/Android Native.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '40,000.00',
          discountedPrice: '26,000.00'
        }
      ]
    },
    {
      id: 'aiml',
      name: 'AI & Machine Learning',
      courses: [
        {
          title: 'AI & Machine Learning',
          image: '../../../assets/images/landingpage/Course/Mac Native Swift.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '45,000.00',
          discountedPrice: '28,000.00'
        },
        {
          title: 'Neural Networks Pro',
          image: '../../../assets/images/landingpage/Course/Flutter.png',
          mode: 'Classroom',
          duration: '04 Month | 1.5 hours/day',
          startDate: '25 Apr, 2026',
          lectureVideos: 'Yes',
          projects: 'Yes',
          internship: 'Yes',
          originalPrice: '45,000.00',
          discountedPrice: '28,000.00'
        }
      ]
    }
  ];

  searchTerm: string = '';
  categorySearchTerm: string = '';
  activeCategoryId: string = 'trending';

  get filteredCategories(): Category[] {
    const courseTerm = this.searchTerm.toLowerCase().trim();
    const categoryTerm = this.categorySearchTerm.toLowerCase().trim();

    const filtered = this.categories
      .filter(category =>
        !categoryTerm || category.name.toLowerCase().includes(categoryTerm)
      )
      .map(category => ({
        ...category,
        courses: category.courses.filter(course =>
          !courseTerm || course.title.toLowerCase().includes(courseTerm)
        )
      }))
      .filter(category => category.courses.length > 0);

    // If active category is no longer visible, select the first visible one
    if (filtered.length > 0 && !filtered.find(c => c.id === this.activeCategoryId)) {
      this.activeCategoryId = filtered[0].id;
    }

    return filtered;
  }

  selectCategory(id: string): void {
    this.activeCategoryId = id;
    if (id !== 'all') {
      this.isExploreMore = false;
      this.startInactivityTimer();
    } else {
      this.clearInactivityTimer();
    }
  }

  private startInactivityTimer(): void {
    this.clearInactivityTimer();
    this.inactivityTimer = setTimeout(() => {
      this.resetFilters();
    }, 15000);
  }

  private clearInactivityTimer(): void {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
      this.inactivityTimer = null;
    }
  }

  onInteraction(): void {
    if (this.activeCategoryId !== 'all') {
      this.startInactivityTimer();
    }
  }

  getCategoryCourseCount(categoryId: string): number {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.courses.length : 0;
  }

  exploreMoreCourses(): void {
    this.isExploreMore = true;
    if (this.activeCategoryId !== 'all') {
      this.startInactivityTimer();
    }
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.categorySearchTerm = '';
    this.activeCategoryId = 'all';
    this.isExploreMore = false;
    this.clearInactivityTimer();
  }

  trackByCategory(index: number, category: Category): string {
    return category.id;
  }

  ngOnInit(): void {
    // window.scrollTo({ top: 0, behavior: 'smooth' })
    let allCourses: Course[] = [];
    this.categories.forEach(category => {
      if (category.id !== 'all') {
        allCourses.push(...category.courses);
      }
    });

    // Specific courses requested to be on top
    const priorityTitles = [
      'Python Full Stack',
      'UI/UX Mastering',
      'Selenium',
      'Android Native',
      'Flutter',
      'Mac Native Swift'
    ];

    // Separate priority courses from the rest
    const priorityCourses = allCourses.filter(c => priorityTitles.includes(c.title));
    const otherCourses = allCourses.filter(c => !priorityTitles.includes(c.title));

    // Sort priority courses to match the requested order
    priorityCourses.sort((a, b) => priorityTitles.indexOf(a.title) - priorityTitles.indexOf(b.title));

    // Combine them
    allCourses = [...priorityCourses, ...otherCourses];

    const allCategory = this.categories.find(c => c.id === 'all');
    if (allCategory) {
      allCategory.courses = allCourses;
    }

    // Populate Trending category
    const trendingCategory = this.categories.find(c => c.id === 'trending');
    if (trendingCategory) {
      const trendingTitles = [
        'Artificial Intelligence',
        'AI & Machine Learning',
        'Python with Gen AI',
        'Data Science',
        'UI/UX with AI',
        'Digital Marketing',
        'Python Full Stack',
        // 'Ethical Hacking',
        'SEO & SEM Expert'
      ];
      trendingCategory.courses = allCourses.filter(c => trendingTitles.includes(c.title));
    }
  }

  ngOnDestroy(): void {
    this.clearInactivityTimer();
  }
}
