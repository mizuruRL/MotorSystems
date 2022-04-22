import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../orders/orders.component';
import { compareDates } from '../../product/product-details/product-details.component';
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
  public inputDate: FormControl = new FormControl('', Validators.required)

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private prodService: ProductsService, private orderService: OrdersService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrder(this.id).subscribe(order => {
      this.order = order;
      this.inputDate.setValue(new Date(this.order.orderDelivery!).toISOString().slice(0, 10));
      this.inputDate.addValidators(newDeliveryValidator(order.orderDate));
    });
  }

  newDeliveryDate() {
    let compare: number = compareDates(this.inputDate.value!, this.order?.orderDelivery!)
    if (compare == 0) { this.edit = false; return }
    else {
      if (compare == 1) {
        this.order!.state = "Delayed";        
      }
      this.order!.orderDelivery = this.inputDate.value;
      console.log(this.order!);
      this.orderService.updateOrder(this.id, this.order!).subscribe(res => this.edit = false);
    }
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

function newDeliveryValidator(orderDate: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return compareDates(orderDate, control.value) > 0 ? { invalidDate: true } : null;
  }
}
