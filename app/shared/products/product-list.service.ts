import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { BackendService } from "../config/backend.service";
import { ErrorService } from "../config/product.service.errors";
import { Product } from "./product";
import "rxjs/add/operator/map";

@Injectable()
export class ProductListService {
    constructor(private http: Http) {}

    load() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(BackendService.apiUrl + "api/products", {
            headers: headers
        })
            .map(res => res.json())
            .map(data => {
                let productList = [];
                data.forEach((product) => {
                    productList.push(new Product(
                        product._id,
                        product.name,
                        product.type,
                        product.description,
                        product.price,
                        product.highlight,
                        product.date,
                        product.expired,
                        product.promotion,
                        product.promotionPrice,
                        product.images));

                });
                return productList;
            })
            .catch(ErrorService.allProductsNotFound);
    }

    getById(id: string){
        let url = BackendService.apiUrl + "api/product/" + id;
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(url, {
            headers: headers
        })
            .map(res => res.json())
            .map(data => {
                data = data[0];
                let product;
                product = new Product(data._id,
                    data.name,
                    data.type,
                    data.description,
                    data.price,
                    data.highlight,
                    data.date,
                    data.expired,
                    data.promotion,
                    data.promotionPrice,
                    data.images);
                return product;
            })
            .catch(ErrorService.productNotFound);
    }

    getPromotions(){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(BackendService.apiUrl + "api/products/promotions", {
            headers: headers
        })
            .map(res => res.json())
            .map(data => {
                let productList = [];
                data.forEach((product) => {
                    productList.push(new Product(
                        product._id,
                        product.name,
                        product.type,
                        product.description,
                        product.price,
                        product.highlight,
                        product.date,
                        product.expired,
                        product.promotion,
                        product.promotionPrice,
                        product.images
                    ));
                });
                return productList;
            })
            .catch(ErrorService.handleErrors);
    }

    getProductsOfType(type: string){
        let url = BackendService.apiUrl + "api/products/" + type;
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.get(url, {
            headers: headers
        })
            .map(res => res.json())
            .map(data => {
                let productList = [];
                data.forEach((product) => {
                    productList.push(new Product(
                        product._id,
                        product.name,
                        product.type,
                        product.description,
                        product.price,
                        product.highlight,
                        product.date,
                        product.expired,
                        product.promotion,
                        product.promotionPrice,
                        product.images
                    ));
                });
                return productList;
            })
            .catch(ErrorService.categoryNotFound);
    }

}