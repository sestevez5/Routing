import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  // tslint:disable-next-line: variable-name
  private _products$: BehaviorSubject<Product[]>;
  readonly products$ = this._products$.asObservable();

  ProductSelected: Product;
  dataStore: { products: Product[] } = { products: []};

  private REST_API_SERVER = 'http://localhost:3000/products';


  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line: typedef
  loadAll() {
    this.httpClient.get(this.REST_API_SERVER)
    .subscribe(
      (products: Product[]) => {
        this.dataStore.products = products;
        this._products$.next(Object.assign({}, this.dataStore).products);
       },
       error => console.log('Could not load todos.')
      );
  }

  getproducts() {
    return this.products$;
  }


}
