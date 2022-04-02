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

  constructor(private service: OrdersService, private prodService: ProductsService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.service.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;      
      this.orders.forEach(order =>
        order.productIds.forEach(productId => {
          console.log(productId);
          this.prodService.getProduct(productId).subscribe(res => order.productNames.push(res.name))
        })
        )
      });
  }

  getOrdersByProduct(prodId: number) {
    this.service.getOrdersByProduct(prodId).subscribe(res => this.orders = res);
  }


}

export interface Order {
  id: number;
  productNames: [string];
  orderDate: Date;
  orderDelivery: Date;
  state: string;
  productIds: [number];
  quantityOrdered: number;
}
