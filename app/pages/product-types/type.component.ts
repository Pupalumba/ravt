import {Component, OnInit} from "@angular/core";
import {Product} from "../../shared/products/product";
import {ProductListService} from "../../shared/products/product-list.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: "type",
    templateUrl: "pages/product/product-list.html",
    styleUrls: ["pages/product-types/types-common.css"],
    providers: [ProductListService]
})
export class TypeComponent implements OnInit {
    private productList:Array<Product> = [];
    private category:string = "";
    private errorMessage:string = "";
    private isLoading:boolean = false;
    private listLoaded:boolean = false;

    constructor(private productListService:ProductListService, private route:ActivatedRoute) {}

    ngOnInit() {
        this.isLoading = true;
        this.getAllProducts();
        this.category = this.route.snapshot.params['type']
    }

    private getAllProducts():void {
        this.route.params
            .switchMap((params:Params) =>
                this.productListService.getProductsOfType(params['type']))
            .subscribe(
                loadedProducts => {
                    loadedProducts.forEach((productObject) => {
                        this.productList.unshift(productObject);
                    });
                    this.isLoading = false;
                    this.listLoaded = true;
                },
                error => {
                    this.isLoading = false;
                    this.errorMessage = error;
                });
    }
}