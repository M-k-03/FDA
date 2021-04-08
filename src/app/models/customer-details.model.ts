export class CustomerDetailsModel {
    id:String;
    custName:String;
    imageUrl: String;
    rating:number;
    description:String;
    additionalInfo:String;

    constructor(id:String,custName:String,imageUrl: String,rating:number,description:String,additionaInfo:String) {
        this.id = id;
        this.custName = custName;
        this.imageUrl = imageUrl;
        this.rating = rating;
        this.description = description;
        this.additionalInfo = additionaInfo;
    }
}