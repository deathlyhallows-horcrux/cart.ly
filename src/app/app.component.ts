import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/RX';
import { Product } from './Models/product.model';
import { ShoppingCartService } from './Services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  public shoppingCartItems: Observable<Product[]>;
  public showStyle = false;
  public message : string;
  
   @ViewChild('cartbutton') divClick: ElementRef;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.shoppingCartItems = this.shoppingCartService.getCartItems();
    this.shoppingCartItems.subscribe();
  }

  ngOnInit() {
    this.shoppingCartService.currentMessage.subscribe(message => setTimeout(() => this.message = message, 0));    
  }
  
  ngAfterViewInit(){

  }
  setStyle(){
    if( this.message == "none"){
         this.triggerFalseClick();
       //  return {'display':'none'}
    }
    // return {'display':'block'}
  }
  triggerFalseClick() {
    let el: HTMLElement = this.divClick.nativeElement as HTMLElement;
    el.click();
}

}
