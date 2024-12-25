import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HireFromUsComponent } from './Components/hire-from-us/hire-from-us.component';
import { PlacementsComponent } from './Components/placements/placements.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'hire-from-us',
    component: HireFromUsComponent,
  },
  {
    path: 'placements',
    component: PlacementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
