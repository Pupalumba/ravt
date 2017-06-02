import { ProductComponent } from "./pages/product/product.component";
import { ProductDetailComponent } from "./pages/product/product-detail.component";

import {HomeComponent} from "./pages/home/home.component";
import {TypeComponent} from "./pages/product-types/type.component";

import {LoginComponent} from "./pages/login/login.component";
import {ContactsComponent} from "./pages/contact/contact.component";
import {RegisterComponent} from "./pages/register/register.component";
import {SingoutComponent} from "./pages/singout/singout.component";

export const routes = [
    { path: "", redirectTo: '/home/products', pathMatch: 'full' },
    {
        path: "home",
        component: HomeComponent,
        children: [
            // '/home/otherPath' loaded into `router-outlet` in main content
            {
                path: "products",
                component: ProductComponent,
                data: {
                    category: "All"
                }
            },
            {
                path: "product/:type",
                component: TypeComponent,
            },
            // etc.
        ]
    },
    { path: "product/:_id", component: ProductDetailComponent },
    { path: "login", component: LoginComponent },
    { path: "singout", component: SingoutComponent },
    { path: "contacts", component: ContactsComponent },
    { path: "singup", component: RegisterComponent },
];

export const navigatableComponents = [
    LoginComponent,
    ContactsComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    TypeComponent,
    RegisterComponent,
    SingoutComponent
];