import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../orders/orders.component';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';
import { OrderCancelledDialogComponent } from '../order-cancelled-dialog/order-cancelled-dialog.component';
import { OrderDeliveredDialogComponent } from '../order-delivered-dialog/order-delivered-dialog.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public id: number = 0;
  public order: Order | undefined;
  public edit: boolean = false;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private prodService: ProductsService, private orderService: OrdersService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrder(this.id).subscribe(order => this.order = order);
  }

  registerAsDelivered(): void {
    if (this.order && this.order.orderItems) {
      let len = this.order.orderItems.length;
      for (let i = 0; i < len; i++) {
        let item = this.order.orderItems[i];
        item.product!.availableQuantity += item.quantity;
        this.prodService.updateProductQuantity(item.product!.id, item.product!).subscribe(
          res => {
            if (i + 1 == len) {
              if (this.order) {
                this.order.state = "Delivered";
                this.orderService.updateOrder(this.order.id!, this.order).subscribe(
                  res=>this.router.navigateByUrl('orders')
                );
              }
            }
        });        
      }
    }
  }

  registerAsCancelled(): void {
    this.order!.state = "Cancelled";
    this.order!.orderDelivery = undefined;
    console.log("ORDER: ", this.order);
    this.orderService.updateOrder(this.order!.id!, this.order!).subscribe(
      res => this.router.navigateByUrl('orders')
    );
  }

  cancelOrder(): void {
    const dialogRef = this.dialog.open(OrderCancelledDialogComponent, {
      height: '200px',
      width: '450px',
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res.data) {
        this.registerAsCancelled();
      }
      else {
        this.router.navigateByUrl('orders');
      }
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OrderDeliveredDialogComponent, {
      height: '200px',
      width: '450px',
    })

    dialogRef.afterClosed().subscribe(res => {
      if (res.data) {
        this.registerAsDelivered();
      }
      else {
        this.router.navigateByUrl('products');
      }
    })
  }
}
