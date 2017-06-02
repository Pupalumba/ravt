import {Component } from '@angular/core';
import {UserService} from "../../shared/user/user.service";
import {Router} from '@angular/router';
var frameModule = require("ui/frame");

@Component({
    selector: "singout",
    templateUrl: "pages/singout/singout.html",
    styleUrls: ["pages/singout/singout.css"],
    providers: [UserService]
})
export class SingoutComponent{
    private waitForRedirect:boolean = false;

    constructor(private userService: UserService, private router:Router){}

    onNavBtnTap():void{
        frameModule.topmost().goBack();
    }

    private logout():void {
        this.waitForRedirect = true;
        this.userService.logout()
            .delay(3000)
            .subscribe(
                () => this.router.navigate(["/home/products"]),
                (error) => alert(error)
            );
    }
}