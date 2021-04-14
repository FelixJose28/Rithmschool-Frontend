import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./course/course.module').then(m=>m.CourseModule)
  },
  {
    path:'course',
    loadChildren: ()=>import('./course/course.module').then(m=>m.CourseModule)
  },
  {
    path:'teacher',
    loadChildren: ()=>import('./teacher/teacher.module').then(m=>m.TeacherModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
