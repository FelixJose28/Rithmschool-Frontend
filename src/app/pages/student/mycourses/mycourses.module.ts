import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycoursesRoutingModule } from './mycourses-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MycoursesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MycoursesModule { }
