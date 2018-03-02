import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from '../Models/product.model';
import { Observer, Observable, BehaviorSubject } from 'rxjs/RX';
import { ShoppingCart } from '../Models/shopping-cart.model';

@Injectable()
export class ShoppingCartService {

  private productsInCart: Product[];
  private productsInShoppingCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);

  //data share
  private messageSource = new BehaviorSubject<string>("default");
  currentMessage = this.messageSource.asObservable();

  constructor(private productService: ProductsService) {
    this.productsInShoppingCartSubject.subscribe(productsInCart => this.productsInCart = productsInCart);

  }

  //recent data share
  changeMessage(message: string) {
    this.messageSource.next(message)
    console.log("message changes", message)
  }

  public getCartItems(): Observable<Product[]> {
    return this.productsInShoppingCartSubject;
  }

  public addItem(product: Product, quantity: number) {
    this.productsInShoppingCartSubject.next([...this.productsInCart, product]);
  }

  public calculateShoppingCartTotal() {
    return this.productsInShoppingCartSubject.map((productsInCart: Product[]) => {
      return productsInCart.reduce((prev, curr: Product) => {
        return (prev + curr.price);
      }, 0);
    });

  }

  public deleteItem(product: Product) {

  }

}
