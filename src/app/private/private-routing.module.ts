import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard } from './private.guard';
//import { AdminContainerComponent } from '../containers/admin-container/admin-container.component';
import { CommerceLayoutComponent } from '../ui/layouts/commerce-layout/commerce-layout.component';
//import { HomeContainerComponent } from '../containers/home-container/home-container.component';
//import { RegisterReadingContainerComponent } from '../containers/register-reading-container/register-reading-container.component';
//import { QuoteOptimoContainerComponent } from '../containers/quote-optimo-container/quote-optimo-container.component';

const routes: Routes = [
  {
    path: '',
    component: CommerceLayoutComponent,
    canActivate: [PrivateGuard]
  },
  // {
  //   path: 'home',
  //   component: HomeContainerComponent,
  //   canActivate: [PrivateGuard]
  // },
  // {
  //   path: 'reading-register',
  //   component: RegisterReadingContainerComponent,
  //   canActivate: [PrivateGuard]
  // },
  // {
  //   path: 'reading-quote-optime',
  //   component: QuoteOptimoContainerComponent,
  //   canActivate: [PrivateGuard]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
