"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_1 = require("../../shared/products/product");
var product_list_service_1 = require("../../shared/products/product-list.service");
var frameModule = require("ui/frame");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Carousel", function () { return require("nativescript-carousel").Carousel; });
element_registry_1.registerElement("CarouselItem", function () { return require("nativescript-carousel").CarouselItem; });
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productListService, route) {
        this.productListService = productListService;
        this.route = route;
        this.product = product_1.Product;
        this.images = "";
        this.isLoading = false;
        this.errorMessage = "";
        this.listLoaded = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.getProduct();
    };
    ProductDetailComponent.prototype.onNavBtnTap = function () {
        frameModule.topmost().goBack();
    };
    ProductDetailComponent.prototype.getProduct = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.productListService.getById(params['_id']);
        })
            .subscribe(function (loadedGroceries) {
            _this.product = loadedGroceries;
            _this.images = loadedGroceries.images;
            _this.isLoading = false;
            _this.listLoaded = true;
        }, function (error) {
            _this.isLoading = false;
            _this.errorMessage = error;
        });
    };
    ProductDetailComponent.prototype.checkForNumberType = function (value) {
        try {
            if (+value) {
                return true;
            }
            else {
                throw value;
            }
        }
        catch (e) {
            return false;
        }
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: "details",
        templateUrl: "pages/product/product-detail.html",
        styleUrls: ["pages/product/product-common.css"],
        providers: [product_list_service_1.ProductListService]
    }),
    __metadata("design:paramtypes", [product_list_service_1.ProductListService,
        router_1.ActivatedRoute])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQXVEO0FBQ3ZELHlEQUF3RDtBQUN4RCxtRkFBZ0Y7QUFFaEYsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXRDLDBFQUFzRTtBQUN0RSxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxjQUFjLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksRUFBN0MsQ0FBNkMsQ0FBQyxDQUFDO0FBUXJGLElBQWEsc0JBQXNCO0lBTy9CLGdDQUFvQixrQkFBcUMsRUFDckMsS0FBb0I7UUFEcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFlO1FBUGhDLFlBQU8sR0FBVSxpQkFBTyxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixlQUFVLEdBQVcsS0FBSyxDQUFDO0lBSW5DLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCw0Q0FBVyxHQUFYO1FBQ0ksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTywyQ0FBVSxHQUFsQjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO2FBQ1osU0FBUyxDQUFDLFVBQUMsTUFBYTtZQUNyQixPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQTlDLENBQThDLENBQUM7YUFDbEQsU0FBUyxDQUNOLFVBQUEsZUFBZTtZQUNYLEtBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU8sbURBQWtCLEdBQTFCLFVBQTJCLEtBQVU7UUFDakMsSUFBRyxDQUFDO1lBQ0EsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUNELElBQUksQ0FBQSxDQUFDO2dCQUNELE1BQU0sS0FBSyxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsS0FBSyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksc0JBQXNCO0lBTmxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsbUNBQW1DO1FBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO0tBQ2xDLENBQUM7cUNBUXlDLHlDQUFrQjtRQUMvQix1QkFBYztHQVIvQixzQkFBc0IsQ0FrRGxDO0FBbERZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb2R1Y3RzL3Byb2R1Y3RcIjtcbmltcG9ydCB7IFByb2R1Y3RMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvZHVjdHMvcHJvZHVjdC1saXN0LnNlcnZpY2VcIjtcblxudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5pbXBvcnQge3JlZ2lzdGVyRWxlbWVudH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbnJlZ2lzdGVyRWxlbWVudChcIkNhcm91c2VsXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2Fyb3VzZWxcIikuQ2Fyb3VzZWwpO1xucmVnaXN0ZXJFbGVtZW50KFwiQ2Fyb3VzZWxJdGVtXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2Fyb3VzZWxcIikuQ2Fyb3VzZWxJdGVtKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZGV0YWlsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvcHJvZHVjdC9wcm9kdWN0LWNvbW1vbi5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbUHJvZHVjdExpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHByb2R1Y3Q6T2JqZWN0ID0gUHJvZHVjdDtcbiAgICBwcml2YXRlIGltYWdlczogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGlzTG9hZGluZzpib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6c3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGxpc3RMb2FkZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9kdWN0TGlzdFNlcnZpY2U6UHJvZHVjdExpc3RTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldFByb2R1Y3QoKTtcbiAgICB9XG5cbiAgICBvbk5hdkJ0blRhcCgpOnZvaWR7XG4gICAgICAgIGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFByb2R1Y3QoKTp2b2lke1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtc1xuICAgICAgICAgICAgLnN3aXRjaE1hcCgocGFyYW1zOlBhcmFtcykgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0U2VydmljZS5nZXRCeUlkKHBhcmFtc1snX2lkJ10pKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBsb2FkZWRHcm9jZXJpZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gbG9hZGVkR3JvY2VyaWVzLmltYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb3JOdW1iZXJUeXBlKHZhbHVlOiBhbnkpOmJvb2xlYW57XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGlmKCt2YWx1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRocm93IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGUpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19