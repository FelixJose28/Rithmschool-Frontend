import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { MycoursesModule} from './mycourses/mycourses.module';
import { StudentComponent } from './student.component';
import { BuyComponent } from './buy/buy.component'

@NgModule({
  declarations: [
    StudentComponent,
    BuyComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MycoursesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
