import { Product } from './../models/product';
import { Note } from './../models/note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products$ = new BehaviorSubject<Product[]>([]);
  readonly Products$ = this.products$.asObservable();
  n: Note;

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'

    })
  };

  

  dataStore: { products: Product[], notes: Note[]} = { products: [], notes: []};

  private REST_API_SERVER = 'http://localhost:3000/products';
  private REST_API_SERVER1 = 'http://afx.hopto.org/KNote/api/';


  constructor(private httpClient: HttpClient) {
    this.loadAll();
  }

  loadAll(): void {

    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');
    this.httpClient.get(this.REST_API_SERVER, this.httpOptions)
    .subscribe(
      (products: Product[]) => {
        this.dataStore.products = products;
        this.products$.next(Object.assign({}, this.dataStore).products);
       },
       error => console.log('Could not load todos.')
      );
  }

  loadAllNotes(): void {


    //this.httpClient.get(this.REST_API_SERVER1+'notes/homenotes', this.httpOptions)

    this.httpClient.get('https://localhost:44342/weatherforecast')
    .subscribe(
      (data: any) => {
        console.log(data.entity);
       },
       error => console.log('Could not load todos.')
      );

  }

  getproducts(): Observable<Product[]> {
    return this.Products$;
  }



}
