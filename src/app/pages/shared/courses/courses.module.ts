import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { DetailsComponent } from './details/details.component';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    DetailsComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
