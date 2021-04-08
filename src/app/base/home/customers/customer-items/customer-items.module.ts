import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerItemsPageRoutingModule } from './customer-items-routing.module';

import { CustomerItemsPage } from './customer-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerItemsPageRoutingModule
  ],
  declarations: [CustomerItemsPage]
})
export class CustomerItemsPageModule {}
