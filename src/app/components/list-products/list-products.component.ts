import { Product } from './../../models/product';
import { DataService } from '../../services/data.service';
import { Component, OnInit, ɵConsole, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit, OnDestroy {

  productsSubscription: Subscription;
  products$: Observable<Product[]>;

  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.products$ = this.dataService.getproducts();
  }

  ngOnDestroy(): void {
  }

}
