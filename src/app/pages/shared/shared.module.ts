import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ProfileModule} from './profile/profile.module'
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    CoursesComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ProfileModule
  ]
})
export class SharedModule { }
