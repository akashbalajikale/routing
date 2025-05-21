import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { UserComponent } from "./shared/components/user/user.component";
import { ProductComponent } from "./shared/components/product/product.component";



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
        component : ProductComponent
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