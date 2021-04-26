import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    path:'list',
    component: CoursesComponent
  },
  {
    path:'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
