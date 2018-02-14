import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Product, ProductData } from '../Models/product.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService {
  private products: Observable<Product[]>;

  constructor(private http: Http) { }

  getALLProducts(): Observable<Product[]> {
    try {
    return this.http
                    .get('../assets/product-payload.json')
                    .map((data) => {
                      // console.log(data.json);
                      return data.json(); } );
  } catch (error) { console.log(error); }

  }
}
