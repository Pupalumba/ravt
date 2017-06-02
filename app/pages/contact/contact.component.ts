import {Component } from '@angular/core';
var frameModule = require("ui/frame");

@Component({
    selector: "contacts",
    templateUrl: "pages/contact/contact.html",
    styleUrls: ["pages/contact/contact.css"],
})
export class ContactsComponent {
    onNavBtnTap():void{
        frameModule.topmost().goBack();
    }
}