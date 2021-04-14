import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MycoursesModule} from './mycourses/mycourses.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MycoursesModule
  ]
})
export class StudentModule { }
