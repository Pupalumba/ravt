import {Component, ViewChild, ChangeDetectorRef, OnInit, AfterViewInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {RadSideDrawerComponent, SideDrawerType} from 'nativescript-telerik-ui/sidedrawer/angular';
import {DrawerTransitionBase, SlideInOnTopTransition} from 'nativescript-telerik-ui/sidedrawer';
import {Page} from "ui/page";
import {BackendService} from "../../shared/config/backend.service";

var frame = require("ui/frame");

@Component({
    selector: "home",
    templateUrl: "pages/home/index.html",
    styleUrls: ["pages/home/index.css"],
})
export class HomeComponent implements OnInit, AfterViewInit {

    userLoggedIn:boolean;

    @ViewChild(RadSideDrawerComponent) public drawerComponent:RadSideDrawerComponent;
    private _sideDrawerTransition:DrawerTransitionBase;
    private _drawer:SideDrawerType;

    constructor(private page:Page,
                private _changeDetectionRef:ChangeDetectorRef,
                private router:Router) {
        page.on("loaded", this.onLoaded, this);

    }

    ngOnInit() {
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this._drawer.closeDrawer();
            }
        });

        this.userLoggedIn = BackendService.isLoggedIn();
    }

    ngAfterViewInit() {
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }


    get sideDrawerTransition():DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    toggle():void {
        this._drawer.toggleDrawerState();
    }

    onLoaded(args):void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }
}