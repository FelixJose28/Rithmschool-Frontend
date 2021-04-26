import { BuyComponent } from './buy/buy.component';
import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'student',
    pathMatch:'full'
  },
  {
    path:'student',
    component: StudentComponent
  },
  {
    path:'buy/:id',
    component: BuyComponent
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
