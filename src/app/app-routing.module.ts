import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { UserComponent } from "./shared/components/user/user.component";
import { ProductsDashboardComponent } from "./shared/components/products-dashboard/products-dashboard.component";
import { FormProductComponent } from "./shared/components/products-dashboard/form-product/form-product.component";
import { ProductComponent } from "./shared/components/products-dashboard/product/product.component";
  



const routes : Routes =[
   
    {
        path : 'home',
        component : DashboardComponent
    },
     {
        path : '',
        redirectTo : 'home',
        pathMatch : "full"
    },
    {
        path : 'users',
        component : UserComponent
    },
    {
        path : 'products',
        component :  ProductsDashboardComponent
    },
    {
        path : 'products/addProduct',
        component : FormProductComponent
    },
    {
        path : 'products/:pid',
        component : ProductComponent
    },
    {
        path : 'products/:pid/edit',
        component : FormProductComponent
    }
]

@NgModule({
    imports :[
        RouterModule.forRoot(routes)
    ],
    exports :[
        RouterModule
    ]
})
export class AppRoutingModule{

}