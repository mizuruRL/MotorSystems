import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from '../../orders/orders.component';
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
  public order: Order | undefined;
  public products: Product[] | undefined;
  public product: Product | undefined;

  constructor(private service: OrdersService, private prodService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.populateProducts();
  }

  createOrder() {
    /*TODO: order dates should be created by default when pushed to the DB and not on user input, so: orderDate should be
     Date.now, and orderDelivery should be orderDate + 3 days.
    */
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

export interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
  price: number;
}
