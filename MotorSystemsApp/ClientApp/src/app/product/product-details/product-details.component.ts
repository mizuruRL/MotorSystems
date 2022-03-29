import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../products/products.component';
import { Order } from '../../orders/orders.component';
import { ProductsService } from '../../services/products.service';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product!: Product;
  public productNeeded!: ProductNeeded[];
  public productMissing: ProductNeeded[] | undefined;
  public orders!: Order[];
  id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private prodService: ProductsService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct();
    this.getProductOrders(this.id);
    this.getProductNeeded();
  }

  getProductOrders(prodId: number) {
    this.orderService.getOrdersByProduct(prodId).subscribe(res => this.orders = res);
  }

  getProductAddView() {
    this.router.navigateByUrl("products/add/" + this.id);
  }

  getProductRemoveView() {
    this.router.navigateByUrl("products/remove/" + this.id);
  }

  getProduct() {
    this.prodService.getProduct(this.id).subscribe((product: Product) => this.product = product);
  }

  getProductNeeded() {
    this.prodService.getProductNeeded(this.id).subscribe(res => {
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



