import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'mycourses',
    pathMatch:'full'
  },
  {
    path:'mycourses',
    loadChildren:()=>import('./mycourses/mycourses.module').then(m=>m.MycoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
