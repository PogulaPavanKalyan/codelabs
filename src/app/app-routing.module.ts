import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components(copy)/home/home.component';
import { CoursesComponent } from './Components(copy)/courses/courses.component';
import { ContactUsComponent } from './Components(copy)/contact-us/contact-us.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'courses',
  component: CoursesComponent
}
  , {
  path: 'contact-us',
  component: ContactUsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
