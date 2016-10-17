import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent
      }, 
      {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: ProductDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
