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

  constructor(private ordersService: OrdersService, private prodService: ProductsService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.orders.forEach(order => {
        this.ordersService.getOrderItemsByOrder(order.id).subscribe(items => {
          order.orderItems = items;
          order.orderItems.forEach(item => this.prodService.getProduct(item.productId).subscribe(
            product => { item.product = product; console.log(this.orders) })
          )
          
        })
      })
    })
    //this.service.getOrders().subscribe((orders: OrderRaw[]) => {
    //  this.orders = [];
    //  this.orders.push(orders[0]);
    //  for (let i = 0; i < orders.length; i++) {
    //    if (this.orders) {
    //      let existent: number = this.orders.findIndex(order => order.id == orders[i].id);
    //      if (existent > -1) {
    //        this.orders ?
    //      }
    //    }
        
    //  }
    //  orders.forEach(order =>
    //    order.productIds.forEach(productId => {
    //      console.log(productId);
    //      this.prodService.getProduct(productId).subscribe(res => order.productNames.push(res.name))
    //    })
    //    )
    //  });
  }


  //getOrdersByProduct(prodId: number) {
  //  this.service.getOrdersByProduct(prodId).subscribe(res => this.orders = res);
  //}
}

export interface OrderFinal {
  id: number;
  productNames: [string];
  orderDate: Date;
  orderDelivery: Date;
  state: string;
  productIds: [number];
  quantityOrdered: number;
}

export interface Order {
  id: number;
  orderDate: Date;
  orderDelivery: Date;
  state: string;
  orderItems: OrderItem[]
}

export interface OrderItem {
  orderId: number;
  productId: number;
  order: Order;
  product: Product;
  quantity: number;
  price: number
}
