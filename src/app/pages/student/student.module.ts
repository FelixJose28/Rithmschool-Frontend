import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MycoursesModule} from './mycourses/mycourses.module';
import { StudentComponent } from './student.component'

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MycoursesModule
  ]
})
export class StudentModule { }
