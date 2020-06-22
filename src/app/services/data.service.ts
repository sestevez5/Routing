import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  Products: Product[];
  ProductSelected: Product;

  private REST_API_SERVER = 'http://localhost:3000/products';


  constructor(private httpClient: HttpClient) {

    this.httpClient.get(this.REST_API_SERVER)
      .subscribe(
        (products: Product[]) => {this.Products = products; }
      );

  }

  // public sendGetRequest(){
  //   return this.httpClient.get(this.REST_API_SERVER);
  // }


}
