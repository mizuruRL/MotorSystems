import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { OrdersService } from '../services/orders.service';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] | undefined;
  public product!: Product;

  constructor(private service: OrdersService, private prodService: ProductsService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.service.getOrders().subscribe((orders: Order[]) => this.orders = orders);
  }

  getOrdersByProduct(prodId: number) {
    this.service.getOrdersByProduct(prodId).subscribe(res => this.orders = res);
  }

  getProduct(id: number) {
    this.prodService.getProduct(id).subscribe((prod: Product) => this.product = prod)
  }

}

export interface Order {
  id: number;
  orderDate: Date;
  orderDelivery: Date;
  state: string;
  productId: number;
  quantityOrdered: number;
}
