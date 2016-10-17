import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';



@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent
      }, 
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
