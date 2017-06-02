"use strict";
var application_settings_1 = require("application-settings");
var BackendService = (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
BackendService.apiUrl = "https://retroaudio.herokuapp.com/";
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2REFBNEQ7QUFHNUQ7SUFBQTtJQWNBLENBQUM7SUFYVSx5QkFBVSxHQUFqQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDSSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBaUIsUUFBZ0I7WUFDN0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFLTCxxQkFBQztBQUFELENBQUMsQUFkRDtBQUNXLHFCQUFNLEdBQUcsbUNBQW1DLENBQUM7QUFEM0Msd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcbiAgICBzdGF0aWMgYXBpVXJsID0gXCJodHRwczovL3JldHJvYXVkaW8uaGVyb2t1YXBwLmNvbS9cIjtcclxuXHJcbiAgICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISFnZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgdG9rZW4odGhlVG9rZW46IHN0cmluZykge1xyXG4gICAgICAgIHNldFN0cmluZyhcInRva2VuXCIsIHRoZVRva2VuKTtcclxuICAgIH1cclxufSJdfQ==