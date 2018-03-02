import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/RX';

import { ShoppingCartService } from '../Services/shopping-cart.service';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-storenavigation',
  templateUrl: './storenavigation.component.html',
  styleUrls: ['./storenavigation.component.css']
})
export class StoreNavigationComponent implements OnInit {
  public showStyle = false;
  public shoppingCartItems: Observable<Product[]>;
  public message : string;
  
  @ViewChild('cartbutton') divClick: ElementRef;
  
  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartItems = this.shoppingCartService.getCartItems();
    this.shoppingCartItems.subscribe();
    this.shoppingCartService.currentMessage.subscribe(message => {this.message = message;
    if(this.message == "close"){
      this.triggerFalseClick();
    }});
  }

  ngOnInit() {
   // this.shoppingCartService.currentMessage.subscribe(message => this.message = message);
    console.log("initial message", this.message);
    
  }
  triggerFalseClick() {
    console.log(this.message);
    let el: HTMLElement = this.divClick.nativeElement as HTMLElement;
    el.click();
}
  

}
