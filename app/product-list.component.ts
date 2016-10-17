import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    providers: [ ProductService ]
})
export class ProductListComponent implements OnInit {
    products: Product[];
    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }
}
