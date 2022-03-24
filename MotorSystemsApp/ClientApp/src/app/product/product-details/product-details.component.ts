import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../products/products.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product!: Product;
  public productNeeded!: ProductNeeded[];
  public productMissing: ProductNeeded[] | undefined;
  id: number = 0;

  constructor(private route: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct();
    this.getProductNeeded();
  }

  getProduct() {
    this.service.getProduct(this.id).subscribe((product: Product) => this.product = product);
  }

  getProductNeeded() {
    this.service.getProductNeeded(this.id).subscribe(res => {
      this.productNeeded = res;
      this.getProductMissing();
    });
  }

  sortByUrgency(): void {
    this.productNeeded.sort((a, b) => {      
      if (a.neededForDate < b.neededForDate) {
        return -1;
      }
      else if (a.neededForDate > b.neededForDate) {
        return 1;
      }
      return 0;
    });
  }

  getProductMissing() {
    console.log(this.product);
    let current = this.product.availableQuantity;
    this.sortByUrgency();
    console.log(this.productNeeded);

    for (let i = 0; i < this.productNeeded.length; i++) {
      current -= this.productNeeded[i].quantityNeeded;
      if (current < 0) {
        this.productMissing = this.productNeeded.slice(i);
        this.productMissing[0].quantityNeeded = - current;
      }
    }

    console.log(this.productMissing);
    
  }
}

export interface ProductNeeded{
  id: number;
  productId: number;
  quantityNeeded: number;
  neededForDate: Date;
}



