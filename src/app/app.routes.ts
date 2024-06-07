import { Routes } from '@angular/router';
import { CommerceLayoutComponent } from './ui/layouts/commerce-layout/commerce-layout.component';
import { WaitContainerComponent } from './container/wait-container/wait-container.component';

export const routes: Routes = [
  // {
  //   path:'commerce',
  //   component:CommerceLayoutComponent
  // },


  {
    path: 'commerce',
    loadChildren: () => import('./private/private.module')
      .then((module) => module.PrivateModule)
  },
  // {
  //   path: 'commerce',
  //   loadChildren: () => import('./public/public.module')
  //     .then((module) => module.PublicModule)
  // },
  {
    path: '**',
    redirectTo: 'login' //acá poner el componente de error por si se desea
  },
  { path: 'error', component: WaitContainerComponent }
];
