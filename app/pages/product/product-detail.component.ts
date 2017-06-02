import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import { Product } from "../../shared/products/product";
import { ProductListService } from "../../shared/products/product-list.service";

var frameModule = require("ui/frame");

import {registerElement} from "nativescript-angular/element-registry";
registerElement("Carousel", () => require("nativescript-carousel").Carousel);
registerElement("CarouselItem", () => require("nativescript-carousel").CarouselItem);

@Component({
    selector: "details",
    templateUrl: "pages/product/product-detail.html",
    styleUrls: ["pages/product/product-common.css"],
    providers: [ProductListService]
})
export class ProductDetailComponent implements OnInit {
    private product:Object = Product;
    private images: string = "";
    private isLoading:boolean = false;
    private errorMessage:string = "";
    private listLoaded:boolean = false;

    constructor(private productListService:ProductListService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.getProduct();
    }

    onNavBtnTap():void{
        frameModule.topmost().goBack();
    }

    private getProduct():void{
        this.route.params
            .switchMap((params:Params) =>
                this.productListService.getById(params['_id']))
            .subscribe(
                loadedGroceries => {
                    this.product = loadedGroceries;
                    this.images = loadedGroceries.images;
                    this.isLoading = false;
                    this.listLoaded = true;
                },
                error => {
                    this.isLoading = false;
                    this.errorMessage = error;
                })
    }

    private checkForNumberType(value: any):boolean{
        try{
            if(+value){
                return true;
            }
            else{
                throw value;
            }
        }
        catch(e){
            return false;
        }
    }
}
