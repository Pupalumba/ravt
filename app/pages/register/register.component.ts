import { Component} from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
var frameModule = require("ui/frame");

@Component({
    selector: "register",
    providers: [UserService],
    styleUrls: ["pages/register/register-common.css", "pages/register/register.css"],
    templateUrl: "pages/register/register.html"
})
export class RegisterComponent{
    private user: User;
    private repassword: string = "";

    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
    }

    onNavBtnTap():void{
        frameModule.topmost().goBack();
    }

    private register():void {
        if(this.user.password === this.repassword){
            this.userService.register(this.user)
                .subscribe(
                    () => {
                        this.router.navigate(["/home/products"])
                    },
                    () => alert("Unfortunately we were unable to create your account.")
                );
        }
        else{
            alert("Passwords must match.")
        }

    }
}