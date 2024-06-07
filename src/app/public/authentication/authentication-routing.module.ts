import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UserListContainerComponent } from '../../containers/user-list-container/user-list-container.component';
//import { LoginContainerComponent } from '../../containers/login-container/login-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommerceLayoutComponent } from '../../ui/layouts/commerce-layout/commerce-layout.component';
import { WaitContainerComponent } from '../../container/wait-container/wait-container.component';
//import { RegisterContainerComponent } from '../../containers/register-container/register-container.component';

const routes: Routes = [
  {
    path:'',
    component: CommerceLayoutComponent
  },
  {
    path:'espera',
    component: WaitContainerComponent
  },
  // {
  //   path:'login',
  //   component: LoginContainerComponent
  // }
  // ,
  // {
  //   path:'register',
  //   component: RegisterContainerComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
