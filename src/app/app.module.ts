import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UserComponent } from './shared/components/user/user.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsDashboardComponent } from './shared/components/products-dashboard/products-dashboard.component';
import { ProductComponent } from './shared/components/products-dashboard/product/product.component';
import { FormProductComponent } from './shared/components/products-dashboard/form-product/form-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    NavbarComponent,
    ProductsDashboardComponent,
    ProductComponent,
    FormProductComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
