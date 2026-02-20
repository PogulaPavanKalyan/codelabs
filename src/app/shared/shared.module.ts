import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseInterestCardComponent } from './course-interest-card/course-interest-card.component';

@NgModule({
  declarations: [CourseInfoComponent, CourseInterestCardComponent],
  imports: [CommonModule, FormsModule],
  exports: [CourseInfoComponent, CourseInterestCardComponent],
})
export class SharedModule { }
