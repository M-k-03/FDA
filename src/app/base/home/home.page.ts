import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from 'src/app/api/customer-details.service';
import { OffersService } from 'src/app/api/offers.service';
import { CustomerDetailsModel } from 'src/app/models/customer-details.model';
import { FilterBlockModel } from 'src/app/models/filter-block.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  filterItemsBlock: FilterBlockModel[] = [];
  custItems: CustomerDetailsModel[] = [];
  constructor(private offersService: OffersService, private customerService: CustomerDetails) {
  }

  ngOnInit() {
    this.filterItemsBlock = this.offersService.getfilterItems();
    this.custItems = this.customerService.getCustomerDetails();
  }

  getCustomerClick(event,item) {
    console.log(event);
    console.log(item);
  }
}

