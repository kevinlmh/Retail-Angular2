import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(
        private productService: ProductService,
        private router: Router
    ) { }

    ngOnInit() {
        this.productService.getProducts().then(products => this.products = products);
    }

    viewDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }
}
