import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MycoursesComponent } from './mycourses.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'mycourses',
    pathMatch:'full'
  },
  {
    path:'mycourses',
    component: MycoursesComponent
  },
  {
    path:'detail',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycoursesRoutingModule { }
