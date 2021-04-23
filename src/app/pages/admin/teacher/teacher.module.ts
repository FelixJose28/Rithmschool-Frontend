import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { TeacherComponent } from './teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    DetailsComponent,
    TeacherComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
