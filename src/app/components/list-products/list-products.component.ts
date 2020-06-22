import { Product } from './../../models/product';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ɵConsole, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit, OnDestroy {

  productsSubscription: Subscription;

  products: Product[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

   this.productsSubscription=this.dataService.fetchProducts().subscribe(
     (products: Product[]) => this.products = products
   );

  }

  ngOnDestroy() {
    if (this.productsSubscription){
      this.productsSubscription
    }
  }

  // tslint:disable-next-line: typedef
  dec(p: any) {
    return new Product(p.id, p.name, p.description, p.price, p.imageUrl, p.quantity);
  }

}
