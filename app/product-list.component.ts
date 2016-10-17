import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-list',
    templateUrl: 'app/product-list.component.html',
    providers: [ ProductService ]
})
export class ProductListComponent implements OnInit {
    products: Product[];
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }
}
