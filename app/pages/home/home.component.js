"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var page_1 = require("ui/page");
var backend_service_1 = require("../../shared/config/backend.service");
var frame = require("ui/frame");
var HomeComponent = (function () {
    function HomeComponent(page, _changeDetectionRef, router) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        page.on("loaded", this.onLoaded, this);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this._drawer.closeDrawer();
            }
        });
        this.userLoggedIn = backend_service_1.BackendService.isLoggedIn();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this._drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    Object.defineProperty(HomeComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.toggle = function () {
        this._drawer.toggleDrawerState();
    };
    HomeComponent.prototype.onLoaded = function (args) {
        this._sideDrawerTransition = new sidedrawer_1.SlideInOnTopTransition();
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], HomeComponent.prototype, "drawerComponent", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "pages/home/index.html",
        styleUrls: ["pages/home/index.css"],
    }),
    __metadata("design:paramtypes", [page_1.Page,
        core_1.ChangeDetectorRef,
        router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTZGO0FBQzdGLDBDQUFzRDtBQUN0RCxzRUFBa0c7QUFDbEcsaUVBQWdHO0FBQ2hHLGdDQUE2QjtBQUM3Qix1RUFBbUU7QUFFbkUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBT2hDLElBQWEsYUFBYTtJQVF0Qix1QkFBb0IsSUFBUyxFQUNULG1CQUFxQyxFQUNyQyxNQUFhO1FBRmIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNULHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBa0I7UUFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTNDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxzQkFBYSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLGdDQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQy9DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBR0Qsc0JBQUksK0NBQW9CO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbUNBQXNCLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDO0FBdENzQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUF3QixnQ0FBc0I7c0RBQUM7QUFKeEUsYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUN0QyxDQUFDO3FDQVMyQixXQUFJO1FBQ1csd0JBQWlCO1FBQzlCLGVBQU07R0FWeEIsYUFBYSxDQTBDekI7QUExQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0LCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FbmR9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7UmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGV9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XHJcbmltcG9ydCB7RHJhd2VyVHJhbnNpdGlvbkJhc2UsIFNsaWRlSW5PblRvcFRyYW5zaXRpb259IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xyXG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7QmFja2VuZFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnL2JhY2tlbmQuc2VydmljZVwiO1xyXG5cclxudmFyIGZyYW1lID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJob21lXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9ob21lL2luZGV4Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvaG9tZS9pbmRleC5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICB1c2VyTG9nZ2VkSW46Ym9vbGVhbjtcclxuXHJcbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6UmFkU2lkZURyYXdlckNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOkRyYXdlclRyYW5zaXRpb25CYXNlO1xyXG4gICAgcHJpdmF0ZSBfZHJhd2VyOlNpZGVEcmF3ZXJUeXBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTpQYWdlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOkNoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XHJcbiAgICAgICAgcGFnZS5vbihcImxvYWRlZFwiLCB0aGlzLm9uTG9hZGVkLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RyYXdlci5jbG9zZURyYXdlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudXNlckxvZ2dlZEluID0gQmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOkRyYXdlclRyYW5zaXRpb25CYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkZWQoYXJncyk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG59Il19