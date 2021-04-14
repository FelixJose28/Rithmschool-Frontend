import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { TeacherComponent } from './teacher.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    path:'list',
    component: TeacherComponent
  },
  {
    path:'create',
    component: CreateComponent
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'update',
    component: UpdateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
