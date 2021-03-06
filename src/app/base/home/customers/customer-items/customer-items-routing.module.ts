import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerItemsPage } from './customer-items.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerItemsPageRoutingModule {}
