import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { OrdersService } from '../services/orders.service';
import { Product } from '../products/products.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: Order[] | undefined;

  constructor(private ordersService: OrdersService, private prodService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  ord: string = "ordesaas"

  getOrders() {
    this.ordersService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
    //this.ordersService.getOrders().subscribe(orders => {
    //  this.orders = orders;
    //  this.orders.forEach(order => {
    //    this.ordersService.getOrderItemsByOrder(order.id).subscribe(items => {
    //      order.orderItems = items;
    //      order.orderItems.forEach(item => this.prodService.getProduct(item.productId).subscribe(
    //        product => item.product = product)
    //      )          
    //    })
    //  })
    //})
    
  }

  getOrderDetails(id: number) {
      this.router.navigateByUrl("orders/" + id);
  }
}

export interface Order {
  id: number;
  orderDate: Date;
  orderDelivery: Date;
  state: string;
  orderItems: OrderItem[];
  provider: string
}

export interface OrderItem {
  orderId: number;
  productId: number;
  order: Order;
  product: Product;
  quantity: number;
  price: number
}
