"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_list_service_1 = require("../../shared/products/product-list.service");
var ProductComponent = (function () {
    function ProductComponent(productListService, route) {
        this.productListService = productListService;
        this.route = route;
        this.productList = [];
        this.category = "";
        this.errorMessage = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.getAllProducts();
        this.category = this.route.snapshot.data['category'];
    };
    ProductComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productListService.load()
            .subscribe(function (loadedProducts) {
            loadedProducts.forEach(function (productObject) {
                _this.productList.unshift(productObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        }, function (error) {
            _this.isLoading = false;
            _this.errorMessage = error;
        });
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "pages/product/product-list.html",
        styleUrls: ["pages/product/product-common.css"],
        providers: [product_list_service_1.ProductListService]
    }),
    __metadata("design:paramtypes", [product_list_service_1.ProductListService, router_1.ActivatedRoute])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlEO0FBQ2pELDBDQUFrRDtBQUVsRCxtRkFBOEU7QUFTOUUsSUFBYSxnQkFBZ0I7SUFPekIsMEJBQW9CLGtCQUFxQyxFQUFTLEtBQXFCO1FBQW5FLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQU4vRSxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBVyxLQUFLLENBQUM7SUFFdUQsQ0FBQztJQUUzRixtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTyx5Q0FBYyxHQUF0QjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTthQUN6QixTQUFTLENBQ04sVUFBQSxjQUFjO1lBQ1YsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQztBQWhDWSxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7UUFDL0MsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDbEMsQ0FBQztxQ0FReUMseUNBQWtCLEVBQWdCLHVCQUFjO0dBUDlFLGdCQUFnQixDQWdDNUI7QUFoQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UHJvZHVjdH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm9kdWN0cy9wcm9kdWN0XCI7XHJcbmltcG9ydCB7UHJvZHVjdExpc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Byb2R1Y3RzL3Byb2R1Y3QtbGlzdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvblwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1jb21tb24uY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOiBbUHJvZHVjdExpc3RTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIHByb2R1Y3RMaXN0OkFycmF5PFByb2R1Y3Q+ID0gW107XHJcbiAgICBwcml2YXRlIGNhdGVnb3J5OnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZTpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBpc0xvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBsaXN0TG9hZGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2R1Y3RMaXN0U2VydmljZTpQcm9kdWN0TGlzdFNlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsUHJvZHVjdHMoKTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5kYXRhWydjYXRlZ29yeSddO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QWxsUHJvZHVjdHMoKTp2b2lkIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RMaXN0U2VydmljZS5sb2FkKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGxvYWRlZFByb2R1Y3RzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2FkZWRQcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0T2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdExpc3QudW5zaGlmdChwcm9kdWN0T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=