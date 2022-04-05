import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private prodService: ProductsService, private orderService: OrdersService) { }
  
  ngOnInit(): void {
    //this.id = this.route.snapshot.params['id'];
    //this.orderService.getOrder(this.id).subscribe(order =>
    //  this.orderService.getOrderItemsByOrder(this.id).subscribe(items =>
    //    items.forEach(item => this.prodService.getProduct(item.productId).subscribe(
    //      product => item.product = product
    //    ))
    //  )
    //).add((order) => this.order = order)
  }

}
