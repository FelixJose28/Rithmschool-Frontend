import { CreateComponent } from './../course/create/create.component';
import { DetailsComponent } from './../course/details/details.component';
import { UpdateComponent } from './../course/update/update.component';
import {CourseComponent} from './course.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateComponent,DetailsComponent,UpdateComponent,CourseComponent ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CourseModule { }
