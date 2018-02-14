import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { Observable } from 'rxjs/Observable';
import { Product, ProductData } from '../Models/product.model';
import { ShoppingCartService } from '../Services/shopping-cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public products: Observable<Product[]>;
  public productData: Observable<ProductData>;

  constructor(private productsService: ProductsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.products = this.productsService.getALLProducts();
    // console.log(this.products);

  }

  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public deleteProductFromCart(product: Product): void {
    this.shoppingCartService.deleteItem(product);
  }

}
