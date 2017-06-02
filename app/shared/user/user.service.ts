import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { User } from "./user";
import { BackendService } from "../config//backend.service";
import { ErrorService } from "../config/product.service.errors";

import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class UserService {
    constructor(private http: Http) {}

    register(user: User) {
        let url = BackendService.apiUrl +"users";

        return this.http.post(url, user)
            .map(response => response)
            .do(data => {
                BackendService.token = "asd";
            })
            .catch(ErrorService.handleErrors);
    }

    login(user: User) {
        let url = BackendService.apiUrl + "login";

        return this.http.post(url, user)
            .map(response => response)
            .do(data => {
                BackendService.token = "asd";
            })
            .catch(ErrorService.handleErrors);
    }

    logout(){
        let url = BackendService.apiUrl + "logout";
        return this.http.post(url, "")
            .map(response => response)
            .do(data => {
                BackendService.token = "";
            })
            .catch(ErrorService.handleErrors);
    }
}