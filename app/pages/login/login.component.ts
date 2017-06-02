import {Component} from "@angular/core";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Router} from "@angular/router";
import {Page} from "ui/page";
var frameModule = require("ui/frame");

@Component({
    selector: "login",
    providers: [UserService],
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    templateUrl: "pages/login/login.html"
})
export class LoginComponent{
    private user: User;
    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
    }

    onNavBtnTap():void{
        frameModule.topmost().goBack();
    }

    private login():void {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/home/products"]),
                (error) => alert(error)
            );
    }
}