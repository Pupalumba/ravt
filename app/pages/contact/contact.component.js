"use strict";
var core_1 = require("@angular/core");
var frameModule = require("ui/frame");
var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.onNavBtnTap = function () {
        frameModule.topmost().goBack();
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        selector: "contacts",
        templateUrl: "pages/contact/contact.html",
        styleUrls: ["pages/contact/contact.css"],
    })
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQU90QyxJQUFhLGlCQUFpQjtJQUE5QjtJQUlBLENBQUM7SUFIRyx1Q0FBVyxHQUFYO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQzNDLENBQUM7R0FDVyxpQkFBaUIsQ0FJN0I7QUFKWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidWkvZnJhbWVcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNvbnRhY3RzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9jb250YWN0L2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9jb250YWN0L2NvbnRhY3QuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdHNDb21wb25lbnQge1xyXG4gICAgb25OYXZCdG5UYXAoKTp2b2lke1xyXG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcclxuICAgIH1cclxufSJdfQ==