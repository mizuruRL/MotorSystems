import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] | undefined;

  constructor(private service: OrdersService) { }

  ngOnInit(): void {
  }

  //getOrdersByProduct(prodId: number) {
  //  this.service.getOrdersByProduct(prodId).subscribe(res => this.orders = res);
  //}

}

export interface Order {
  id: number;
  orderDate: Date;
  orderDelivery: Date;
  state: string;
  productId: number;
  quantityOrdered: number;
}
