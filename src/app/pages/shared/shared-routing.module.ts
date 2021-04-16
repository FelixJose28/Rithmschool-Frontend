import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'courses',
    loadChildren:()=>import('./courses/courses.module').then(m=>m.CoursesModule)
  },
  {
    path:'profile',
    loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
