import { PageNotFoundComponent } from './pages/shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/admin',
    pathMatch:'full'
  },
  {
    path:'admin',
    loadChildren: ()=>import('./pages/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'shared',
    loadChildren: ()=>import('./pages/shared/shared.module').then(m=>m.SharedModule)
  },
  {
    path:'student',
    loadChildren: ()=>import('./pages/student/student.module').then(m=>m.StudentModule)
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
