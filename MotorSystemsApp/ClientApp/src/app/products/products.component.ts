import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../services/products.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  //styleUrls: ['./products.component.css']
})

export class ProductsComponent{
  public products: Product[] = [];

  constructor(private service: ProductsService) {    
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    //this.service.getProducts().subscribe((products: Product[]) => this.products = products);
    //this.products = this.service.getProducts();
    this.service.getProducts().subscribe((products: Product[]) => this.products = products);
  }
}

export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  quantityNeeded: number;
  availableQuantity: number;
}
