export class Product {
    constructor(
        public _id: string, public name: string,
        public type: string,
        public description: string,
        public price: string,
        public highlight: string,
        public date: string,
        public expired: boolean,
        public promotion: boolean,
        public promotionPrice: string,
        public images: Array<any>
    ) {}
}