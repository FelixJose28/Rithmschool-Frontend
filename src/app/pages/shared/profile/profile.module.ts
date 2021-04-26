import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateComponent} from  './update/update.component'
import {DetailComponent} from  './detail/detail.component'

import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [UpdateComponent,DetailComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ProfileModule { }
