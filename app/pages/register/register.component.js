"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var frameModule = require("ui/frame");
var RegisterComponent = (function () {
    function RegisterComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.repassword = "";
        this.user = new user_1.User();
    }
    RegisterComponent.prototype.onNavBtnTap = function () {
        frameModule.topmost().goBack();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.user.password === this.repassword) {
            this.userService.register(this.user)
                .subscribe(function () {
                _this.router.navigate(["/home/products"]);
            }, function () { return alert("Unfortunately we were unable to create your account."); });
        }
        else {
            alert("Passwords must match.");
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "register",
        providers: [user_service_1.UserService],
        styleUrls: ["pages/register/register-common.css", "pages/register/register.css"],
        templateUrl: "pages/register/register.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUM7QUFDekMsK0NBQThDO0FBQzlDLCtEQUE2RDtBQUM3RCwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBQy9CLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQVF0QyxJQUFhLGlCQUFpQjtJQUkxQiwyQkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRmhGLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTyxvQ0FBUSxHQUFoQjtRQUFBLGlCQWNDO1FBYkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDL0IsU0FBUyxDQUNOO2dCQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFBO1lBQzVDLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLEVBQTdELENBQTZELENBQ3RFLENBQUM7UUFDVixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNsQyxDQUFDO0lBRUwsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsU0FBUyxFQUFFLENBQUMsb0NBQW9DLEVBQUUsNkJBQTZCLENBQUM7UUFDaEYsV0FBVyxFQUFFLDhCQUE4QjtLQUM5QyxDQUFDO3FDQUs4QixlQUFNLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUk7R0FKL0UsaUJBQWlCLENBMkI3QjtBQTNCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyZWdpc3RlclwiLFxyXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci1jb21tb24uY3NzXCIsIFwicGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudHtcclxuICAgIHByaXZhdGUgdXNlcjogVXNlcjtcclxuICAgIHByaXZhdGUgcmVwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5hdkJ0blRhcCgpOnZvaWR7XHJcbiAgICAgICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmdvQmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXIoKTp2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnVzZXIucGFzc3dvcmQgPT09IHRoaXMucmVwYXNzd29yZCl7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lL3Byb2R1Y3RzXCJdKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBhbGVydChcIlBhc3N3b3JkcyBtdXN0IG1hdGNoLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXX0=