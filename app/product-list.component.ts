import { Component, OnInit } from '@angular/core';

import { Product } from './product';

@Component({
    selector: 'product-list',
    templateUrl: 'app/product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products = PRODUCTS;
    constructor() { }

    ngOnInit() { }
}

// const PRODUCTS: Product[] = [
//     { id: 1, title: 'product1' },
//     { id: 2, title: 'product2' }
// ];

const PRODUCTS = [
    { 'id': 1, 'title': 'product1' },
    { 'id': 2, 'title': 'product2' }
];