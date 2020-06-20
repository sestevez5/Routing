import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ItemProductComponent } from './components/item-product/item-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';


import { NoCacheHeadersInterceptor } from './helpers/Interceptor';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ListProductsComponent,
    ItemProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: NoCacheHeadersInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
