import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycoursesRoutingModule } from './mycourses-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MycoursesComponent } from './mycourses.component';


@NgModule({
  declarations: [
    DetailComponent,
    MycoursesComponent
  ],
  imports: [
    CommonModule,
    MycoursesRoutingModule
  ]
})
export class MycoursesModule { }
