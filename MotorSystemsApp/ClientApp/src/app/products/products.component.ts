import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Product, ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent{
  public products: Product[] = [];

  constructor(private service: ProductsService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.service.getProducts().subscribe(products => this.products = products);
  }

  getProductPage(id: number) {
    this.router.navigateByUrl("products/" + id);
  }

  sortByUrgency(): void {
    this.products.sort((a, b) => {
      if (a.missingQuantity > 0 && b.missingQuantity <= 0) {
        return -1;
      }
      else if (a.missingQuantity <= 0 && b.missingQuantity > 0) {
        return 1;
      }
      else {
        if (a.daysUntilNextNeed < b.daysUntilNextNeed) {
          return -1;
        }
        else if (a.daysUntilNextNeed > b.daysUntilNextNeed) {
          return 1;
        }
        return 0;
      }
    });
  }

  getBackground(missingQuantity: number, daysNextNeed: number): string {
    if (missingQuantity > 0)
    {
      if (daysNextNeed < 7)
      {
        return 'red';
      }
      else if (daysNextNeed < 30)
      {
        return 'yellow';
      }
      else
      {
        return 'green';
      }
    }
    return 'none';
  }
}


