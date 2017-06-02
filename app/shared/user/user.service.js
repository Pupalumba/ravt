"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var backend_service_1 = require("../config//backend.service");
var product_service_errors_1 = require("../config/product.service.errors");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        var url = backend_service_1.BackendService.apiUrl + "users";
        return this.http.post(url, user)
            .map(function (response) { return response; })
            .do(function (data) {
            backend_service_1.BackendService.token = "asd";
        })
            .catch(product_service_errors_1.ErrorService.handleErrors);
    };
    UserService.prototype.login = function (user) {
        var url = backend_service_1.BackendService.apiUrl + "login";
        return this.http.post(url, user)
            .map(function (response) { return response; })
            .do(function (data) {
            backend_service_1.BackendService.token = "asd";
        })
            .catch(product_service_errors_1.ErrorService.handleErrors);
    };
    UserService.prototype.logout = function () {
        var url = backend_service_1.BackendService.apiUrl + "logout";
        return this.http.post(url, "")
            .map(function (response) { return response; })
            .do(function (data) {
            backend_service_1.BackendService.token = "";
        })
            .catch(product_service_errors_1.ErrorService.handleErrors);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBRXJDLDhEQUE0RDtBQUM1RCwyRUFBZ0U7QUFFaEUsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUkvQixJQUFhLFdBQVc7SUFDcEIscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLElBQUksR0FBRyxHQUFHLGdDQUFjLENBQUMsTUFBTSxHQUFFLE9BQU8sQ0FBQztRQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQzthQUMzQixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUSxDQUFDO2FBQ3pCLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDSixnQ0FBYyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLHFDQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ1osSUFBSSxHQUFHLEdBQUcsZ0NBQWMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO2FBQzNCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsRUFBUixDQUFRLENBQUM7YUFDekIsRUFBRSxDQUFDLFVBQUEsSUFBSTtZQUNKLGdDQUFjLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMscUNBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLElBQUksR0FBRyxHQUFHLGdDQUFjLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQzthQUN6QixHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUSxDQUFDO2FBQ3pCLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDSixnQ0FBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLHFDQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBRWlCLFdBQUk7R0FEckIsV0FBVyxDQWtDdkI7QUFsQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbmZpZy8vYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9jb25maWcvcHJvZHVjdC5zZXJ2aWNlLmVycm9yc1wiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBsZXQgdXJsID0gQmFja2VuZFNlcnZpY2UuYXBpVXJsICtcInVzZXJzXCI7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHVzZXIpXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC5kbyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJhc2RcIjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKEVycm9yU2VydmljZS5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBsZXQgdXJsID0gQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJsb2dpblwiO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCB1c2VyKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiYXNkXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChFcnJvclNlcnZpY2UuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICBsZXQgdXJsID0gQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJsb2dvdXRcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCBcIlwiKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChFcnJvclNlcnZpY2UuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxufSJdfQ==