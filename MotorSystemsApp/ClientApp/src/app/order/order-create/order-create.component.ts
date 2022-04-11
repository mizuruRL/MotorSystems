import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Order, OrderItem } from '../../orders/orders.component';
import { Product } from '../../products/products.component';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  public cart: CartItem[] = [];
  private order: Order | undefined;
  public products: Product[] | undefined;
  private product: Product | undefined;

  constructor(private service: OrdersService, private prodService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.populateProducts();
  }

  createOrder() {
    let orderDate = new Date();
    let orderDelivery = new Date();
    orderDelivery.setDate(orderDate.getDate() + 3);
    this.order = {
      id: undefined,
      orderDate: orderDate,
      orderDelivery: orderDelivery,
      state: "Pending",
      provider: "bla",
      orderItems: undefined
    };
    
    this.service.createOrder(this.order).subscribe(res => {
      this.cart.forEach((cartItem, idx, array) => {        
        this.service.createOrderItem({
          orderId: res.id!,
          order: this.order!,
          price: cartItem.price,
          productId: cartItem.productId,
          product: undefined,
          quantity: cartItem.quantity
        }).subscribe(res => {
          if (idx === array.length - 1) { this.router.navigateByUrl("orders") }
        });
        }
      );      
    });
  }

  makeOrderItems(orderId: number) {
    
  }

  addToOrder(orderForm: NgForm) {
    this.prodService.getProduct(orderForm.value.id).subscribe(prod =>
    {
      this.product = prod;
      let existing = this.cart.find(existingItem => existingItem.productId === this.product!.id)
      let itemQuantity = orderForm.value.quantity;
      let itemPrice = this.product!.price;

      if (existing) {
        existing.quantity += itemQuantity;
        existing.price += itemPrice;
      } else {
        let cartItem: CartItem = { productId: this.product!.id, product: this.product!, quantity: itemQuantity, price: itemPrice };
        this.cart.push(cartItem);
      }
    });
  }

  populateProducts() {
    this.prodService.getProducts().
      subscribe(allProducts => this.products = allProducts)
  }

  totalPrice(): number {
    let total = 0;
    if (this.cart !== undefined) {
      for (let product of this.cart) {
        total += product.price;
      }
    }
    return total;
  }

}

interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
  price: number;
}
