import { Product } from './../../models/product';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.sendGetRequest()
    .subscribe(
      (products: any[]) => {this.products = products.map(p => this.dec(p)); console.log(this.products);}
    );
  }

  // tslint:disable-next-line: typedef
  dec(p: any) {
    return new Product(p.id, p.name, p.description, p.price, p.imageUrl, p.quantity);
  }

}
