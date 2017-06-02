"use strict";
var core_1 = require("@angular/core");
var product_list_service_1 = require("../../shared/products/product-list.service");
var router_1 = require("@angular/router");
var TypeComponent = (function () {
    function TypeComponent(productListService, route) {
        this.productListService = productListService;
        this.route = route;
        this.productList = [];
        this.category = "";
        this.errorMessage = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    TypeComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.getAllProducts();
        this.category = this.route.snapshot.params['type'];
    };
    TypeComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.productListService.getProductsOfType(params['type']);
        })
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
    return TypeComponent;
}());
TypeComponent = __decorate([
    core_1.Component({
        selector: "type",
        templateUrl: "pages/product/product-list.html",
        styleUrls: ["pages/product-types/types-common.css"],
        providers: [product_list_service_1.ProductListService]
    }),
    __metadata("design:paramtypes", [product_list_service_1.ProductListService, router_1.ActivatedRoute])
], TypeComponent);
exports.TypeComponent = TypeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWdEO0FBRWhELG1GQUE4RTtBQUM5RSwwQ0FBdUQ7QUFRdkQsSUFBYSxhQUFhO0lBT3RCLHVCQUFvQixrQkFBcUMsRUFBVSxLQUFvQjtRQUFuRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQU4vRSxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDaEMsYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixpQkFBWSxHQUFVLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBVyxLQUFLLENBQUM7SUFFdUQsQ0FBQztJQUUzRixnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFTyxzQ0FBYyxHQUF0QjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNaLFNBQVMsQ0FBQyxVQUFDLE1BQWE7WUFDckIsT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQXpELENBQXlELENBQUM7YUFDN0QsU0FBUyxDQUNOLFVBQUEsY0FBYztZQUNWLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLGlDQUFpQztRQUM5QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztRQUNuRCxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNsQyxDQUFDO3FDQVF5Qyx5Q0FBa0IsRUFBZ0IsdUJBQWM7R0FQOUUsYUFBYSxDQWdDekI7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2R1Y3R9IGZyb20gXCIuLi8uLi9zaGFyZWQvcHJvZHVjdHMvcHJvZHVjdFwiO1xyXG5pbXBvcnQge1Byb2R1Y3RMaXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wcm9kdWN0cy9wcm9kdWN0LWxpc3Quc2VydmljZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidHlwZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvcHJvZHVjdC9wcm9kdWN0LWxpc3QuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9wcm9kdWN0LXR5cGVzL3R5cGVzLWNvbW1vbi5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtQcm9kdWN0TGlzdFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgcHJvZHVjdExpc3Q6QXJyYXk8UHJvZHVjdD4gPSBbXTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcnk6c3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgZXJyb3JNZXNzYWdlOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGlzTG9hZGluZzpib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGxpc3RMb2FkZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHVjdExpc3RTZXJ2aWNlOlByb2R1Y3RMaXN0U2VydmljZSwgcHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxQcm9kdWN0cygpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1sndHlwZSddXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBbGxQcm9kdWN0cygpOnZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAoKHBhcmFtczpQYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0U2VydmljZS5nZXRQcm9kdWN0c09mVHlwZShwYXJhbXNbJ3R5cGUnXSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBsb2FkZWRQcm9kdWN0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkUHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RMaXN0LnVuc2hpZnQocHJvZHVjdE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==