"use strict";
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var frameModule = require("ui/frame");
var SingoutComponent = (function () {
    function SingoutComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.waitForRedirect = false;
    }
    SingoutComponent.prototype.onNavBtnTap = function () {
        frameModule.topmost().goBack();
    };
    SingoutComponent.prototype.logout = function () {
        var _this = this;
        this.waitForRedirect = true;
        this.userService.logout()
            .delay(3000)
            .subscribe(function () { return _this.router.navigate(["/home/products"]); }, function (error) { return alert(error); });
    };
    return SingoutComponent;
}());
SingoutComponent = __decorate([
    core_1.Component({
        selector: "singout",
        templateUrl: "pages/singout/singout.html",
        styleUrls: ["pages/singout/singout.css"],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], SingoutComponent);
exports.SingoutComponent = SingoutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ291dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaW5nb3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLCtEQUEyRDtBQUMzRCwwQ0FBdUM7QUFDdkMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBUXRDLElBQWEsZ0JBQWdCO0lBR3pCLDBCQUFvQixXQUF3QixFQUFVLE1BQWE7UUFBL0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBRjNELG9CQUFlLEdBQVcsS0FBSyxDQUFDO0lBRTZCLENBQUM7SUFFdEUsc0NBQVcsR0FBWDtRQUNJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8saUNBQU0sR0FBZDtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7YUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLFNBQVMsQ0FDTixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQXhDLENBQXdDLEVBQzlDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksQ0FDMUIsQ0FBQztJQUNWLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksZ0JBQWdCO0lBTjVCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1FBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDM0IsQ0FBQztxQ0FJbUMsMEJBQVcsRUFBaUIsZUFBTTtHQUgxRCxnQkFBZ0IsQ0FrQjVCO0FBbEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbnZhciBmcmFtZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwic2luZ291dFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc2luZ291dC9zaW5nb3V0Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvc2luZ291dC9zaW5nb3V0LmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2luZ291dENvbXBvbmVudHtcclxuICAgIHByaXZhdGUgd2FpdEZvclJlZGlyZWN0OmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKXt9XHJcblxyXG4gICAgb25OYXZCdG5UYXAoKTp2b2lke1xyXG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGxvZ291dCgpOnZvaWQge1xyXG4gICAgICAgIHRoaXMud2FpdEZvclJlZGlyZWN0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpXHJcbiAgICAgICAgICAgIC5kZWxheSgzMDAwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWUvcHJvZHVjdHNcIl0pLFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiBhbGVydChlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==