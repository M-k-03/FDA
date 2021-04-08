import { Injectable } from '@angular/core';
import { FilterBlockModel } from '../models/filter-block.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  filterItems : FilterBlockModel[] = [
        new FilterBlockModel("https://img.mobiscroll.com/demos/worms3.png"),
        new FilterBlockModel("https://img.mobiscroll.com/demos/angrybirds.png"),
        new FilterBlockModel("https://img.mobiscroll.com/demos/worms3.png"),
        new FilterBlockModel("https://img.mobiscroll.com/demos/angrybirds.png"),
        new FilterBlockModel("https://img.mobiscroll.com/demos/angrybirds.png"),
        new FilterBlockModel("https://img.mobiscroll.com/demos/worms3.png")
  ];

  constructor() { }
 
  getfilterItems(){
     return [...this.filterItems];
  }

}
