import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from '../../dialog/dialog.component';
import { Order } from '../../orders/orders.component';
import { Product } from '../../products/products.component';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  public id: number = 0;
  public order: Order | undefined;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private prodService: ProductsService, private orderService: OrdersService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrder(this.id).subscribe(order => this.order = order);
  }

  registerAsDelivered(): void {
    if (this.order) {
      let len = this.order.orderItems.length;
      for (let i = 0; i < len; i++) {
        let item = this.order.orderItems[i];
        item.product.availableQuantity += item.quantity;

        this.prodService.updateProductQuantity(item.product.id, item.product).subscribe(
          res => {
            if (i + 1 == len) {
              if (this.order) 
              this.orderService.deleteOrder(this.order.id).subscribe();
              this.router.navigateByUrl('products');
            }
        });        
      }
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '450px',
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log(res.data);
      if (res.data) {
        this.registerAsDelivered();
      }
      else {
        this.router.navigateByUrl('products');
      }
    })
  }
}
