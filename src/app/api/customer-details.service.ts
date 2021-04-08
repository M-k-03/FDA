import { Injectable } from '@angular/core';
import { CustomerDetailsModel } from '../models/customer-details.model';

@Injectable({
    providedIn: 'root'
})
export class CustomerDetails {

    customerDetails: CustomerDetailsModel[] = [
        new CustomerDetailsModel("1",
            "Lorem ipsum",
            "https://img.mobiscroll.com/demos/worms3.png",
            3.0, "dolor sit amet",
            "consectetur adipiscing elit. Duis ut urna neque."),
        new CustomerDetailsModel("2",
            "Lorem ipsum",
            "https://img.mobiscroll.com/demos/worms3.png",
            3.0, "dolor sit amet",
            "consectetur adipiscing elit. Duis ut urna neque."),
        new CustomerDetailsModel("3",
            "Lorem ipsum",
            "https://img.mobiscroll.com/demos/worms3.png",
            3.0, "dolor sit amet",
            "consectetur adipiscing elit. Duis ut urna neque."),
        new CustomerDetailsModel("4",
            "Lorem ipsum",
            "https://img.mobiscroll.com/demos/worms3.png",
            3.0, "dolor sit amet",
            "consectetur adipiscing elit. Duis ut urna neque."),
        new CustomerDetailsModel("5",
            "Lorem ipsum",
            "https://img.mobiscroll.com/demos/worms3.png",
            3.0, "dolor sit amet",
            "consectetur adipiscing elit. Duis ut urna neque."),
        new CustomerDetailsModel("6",
            "Lorem ipsum",
            "https://img.mobiscroll.com/demos/worms3.png",
            3.0, "dolor sit amet",
            "consectetur adipiscing elit. Duis ut urna neque.")
    ];

    constructor() { }

    getCustomerDetails() {
        return [...this.customerDetails];
    }

}
