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
    MycoursesRoutingModule
  ]
})
export class MycoursesModule { }
