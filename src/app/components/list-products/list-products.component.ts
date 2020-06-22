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

    console.log('hola', this.dataService.Products);
    this.products = this.dataService.Products;
  
  }

  // tslint:disable-next-line: typedef
  dec(p: any) {
    return new Product(p.id, p.name, p.description, p.price, p.imageUrl, p.quantity);
  }

}
