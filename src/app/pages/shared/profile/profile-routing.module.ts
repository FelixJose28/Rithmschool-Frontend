import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'detail',
    pathMatch:'full'
  },
  {
    path:'detail',
    component: DetailComponent
  },
  {
    path:'update',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
