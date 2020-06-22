import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products$ = new BehaviorSubject<Product[]>([]);
  readonly Products$ = this.products$.asObservable();

  dataStore: { products: Product[] } = { products: []};

  private REST_API_SERVER = 'http://localhost:3000/products';


  constructor(private httpClient: HttpClient) {
    this.loadAll();
  }

  loadAll(): void {
    this.httpClient.get(this.REST_API_SERVER)
    .subscribe(
      (products: Product[]) => {
        this.dataStore.products = products;
        this.products$.next(Object.assign({}, this.dataStore).products);
       },
       error => console.log('Could not load todos.')
      );
  }

  getproducts(): Observable<Product[]> {
    return this.Products$;
  }


}
