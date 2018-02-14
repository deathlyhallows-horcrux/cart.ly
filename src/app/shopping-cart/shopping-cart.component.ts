import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Product } from '../Models/product.model';
import { of } from 'rxjs/observable/of';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public shoppingCart: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];
  public closeCart = false;
  message: string ;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCart = this
      .shoppingCartService
      .getCartItems();

    this.shoppingCart.subscribe(cartItems => this.shoppingCartItems = cartItems);
  }

  ngOnInit() {
    // console.log(this.shoppingCartItems);
  }

  public getTotal(): Observable<number> {
    return this.shoppingCartService.calculateShoppingCartTotal().combineLatest( x => x / 100);
  }
  
  // cartClose(){
  //   this.newMessage("none");
  // }

  //overlay displays style
  setStyle(): string {
    if(this.closeCart){ 
       this.newMessage("none");
      return "";
    } 
      else {return "";}
  }
  
  //data to app.comp
  newMessage(msg) {
    this.shoppingCartService.changeMessage(msg);
  }
 
}
