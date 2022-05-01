import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Order, OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public toShow: Order[] = [];
  public open: Order[] = [];
  public closed: Order[] = [];
  public showHistory: boolean = false;

  constructor(private ordersService: OrdersService, private prodService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.ordersService.getOrders().subscribe(orders => {
      orders.forEach(order => {
        if (order.state == "Pending" || order.state == "Delayed") {
          this.open.push(order);
        }
        else {
          this.closed.push(order);
        }
      })
      this.toShow = this.open;
    });    
  }

  switchToShow(): void {
    this.showHistory = !this.showHistory;    
    this.toShow = this.showHistory ? this.closed : this.open;
  }

  getOrderDetails(id: number) {
      this.router.navigateByUrl("orders/" + id);
  }
}


