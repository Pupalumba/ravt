"use strict";
var product_component_1 = require("./pages/product/product.component");
var product_detail_component_1 = require("./pages/product/product-detail.component");
var home_component_1 = require("./pages/home/home.component");
var type_component_1 = require("./pages/product-types/type.component");
var login_component_1 = require("./pages/login/login.component");
var contact_component_1 = require("./pages/contact/contact.component");
var register_component_1 = require("./pages/register/register.component");
var singout_component_1 = require("./pages/singout/singout.component");
exports.routes = [
    { path: "", redirectTo: '/home/products', pathMatch: 'full' },
    {
        path: "home",
        component: home_component_1.HomeComponent,
        children: [
            // '/home/otherPath' loaded into `router-outlet` in main content
            {
                path: "products",
                component: product_component_1.ProductComponent,
                data: {
                    category: "All"
                }
            },
            {
                path: "product/:type",
                component: type_component_1.TypeComponent,
            },
        ]
    },
    { path: "product/:_id", component: product_detail_component_1.ProductDetailComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "singout", component: singout_component_1.SingoutComponent },
    { path: "contacts", component: contact_component_1.ContactsComponent },
    { path: "singup", component: register_component_1.RegisterComponent },
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    contact_component_1.ContactsComponent,
    home_component_1.HomeComponent,
    product_component_1.ProductComponent,
    product_detail_component_1.ProductDetailComponent,
    type_component_1.TypeComponent,
    register_component_1.RegisterComponent,
    singout_component_1.SingoutComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUVBQXFFO0FBQ3JFLHFGQUFrRjtBQUVsRiw4REFBMEQ7QUFDMUQsdUVBQW1FO0FBRW5FLGlFQUE2RDtBQUM3RCx1RUFBb0U7QUFDcEUsMEVBQXNFO0FBQ3RFLHVFQUFtRTtBQUV0RCxRQUFBLE1BQU0sR0FBRztJQUNsQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDN0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixRQUFRLEVBQUU7WUFDTixnRUFBZ0U7WUFDaEU7Z0JBQ0ksSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFNBQVMsRUFBRSxvQ0FBZ0I7Z0JBQzNCLElBQUksRUFBRTtvQkFDRixRQUFRLEVBQUUsS0FBSztpQkFDbEI7YUFDSjtZQUNEO2dCQUNJLElBQUksRUFBRSxlQUFlO2dCQUNyQixTQUFTLEVBQUUsOEJBQWE7YUFDM0I7U0FFSjtLQUNKO0lBQ0QsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxpREFBc0IsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHFDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7Q0FDbkQsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDakMsZ0NBQWM7SUFDZCxxQ0FBaUI7SUFDakIsOEJBQWE7SUFDYixvQ0FBZ0I7SUFDaEIsaURBQXNCO0lBQ3RCLDhCQUFhO0lBQ2Isc0NBQWlCO0lBQ2pCLG9DQUFnQjtDQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUHJvZHVjdERldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUeXBlQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9wcm9kdWN0LXR5cGVzL3R5cGUuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb250YWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1JlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaW5nb3V0Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9zaW5nb3V0L3NpbmdvdXQuY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiAnL2hvbWUvcHJvZHVjdHMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6IFwiaG9tZVwiLFxyXG4gICAgICAgIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAvLyAnL2hvbWUvb3RoZXJQYXRoJyBsb2FkZWQgaW50byBgcm91dGVyLW91dGxldGAgaW4gbWFpbiBjb250ZW50XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IFwicHJvZHVjdHNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJBbGxcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBcInByb2R1Y3QvOnR5cGVcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogVHlwZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZXRjLlxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7IHBhdGg6IFwicHJvZHVjdC86X2lkXCIsIGNvbXBvbmVudDogUHJvZHVjdERldGFpbENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzaW5nb3V0XCIsIGNvbXBvbmVudDogU2luZ291dENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiBcImNvbnRhY3RzXCIsIGNvbXBvbmVudDogQ29udGFjdHNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogXCJzaW5ndXBcIiwgY29tcG9uZW50OiBSZWdpc3RlckNvbXBvbmVudCB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgQ29udGFjdHNDb21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgUHJvZHVjdENvbXBvbmVudCxcclxuICAgIFByb2R1Y3REZXRhaWxDb21wb25lbnQsXHJcbiAgICBUeXBlQ29tcG9uZW50LFxyXG4gICAgUmVnaXN0ZXJDb21wb25lbnQsXHJcbiAgICBTaW5nb3V0Q29tcG9uZW50XHJcbl07Il19