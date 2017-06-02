import { Observable } from "rxjs/Rx";
import { Response } from "@angular/http";

export class ErrorService {

    static handleErrors(error: Response) {
        return Observable.throw(error);
    }

    static allProductsNotFound(error: Response){
        return Observable.throw('Unable to load full list of products');
    }

    static categoryNotFound(error: Response){
        return Observable.throw('Unable to load category');
    }

    static productNotFound(error: Response){
        return Observable.throw('Product not found');
    }
}