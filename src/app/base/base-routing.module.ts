import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasePage } from './base.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: BasePage,
    children:[
      {
        path: 'home', children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },{
            path: ':id',
            loadChildren: () => import('../base/home/customers/customer-items/customer-items.module').then( m => m.CustomerItemsPageModule)
          }
        ] 
      },
      {
        path: 'cart', children: [
          {
            path: '',
            loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
          }
        ] 
      },
      {
        path: 'profile', children: [
          {
            path: '',
            loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
          }
        ] 
      },
      {
        path:'',
        redirectTo: '/base/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/base/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
