import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HireFromUsComponent } from './Components/hire-from-us/hire-from-us.component';
import { LlocationDetailComponent } from './Components/contact-us/llocation-detail/llocation-detail.component';
import { PlacementsComponent } from './Components/placements/placements.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    HireFromUsComponent,
    LlocationDetailComponent,
    PlacementsComponent,
    CertificationsComponent,
    AboutusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
