import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppRoutingModule } from './app.routing';
import { ProductsService } from './Services/products.service';
import { ShoppingCartService } from './Services/shopping-cart.service';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProductsService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
