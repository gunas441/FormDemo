import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAddComponent } from './form-add/form-add.component';

const routes: Routes = [{path:"",component:FormAddComponent,pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
