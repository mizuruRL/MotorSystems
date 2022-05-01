import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { compareDates } from '../../services/date.service';
import { Order, OrdersService } from '../../services/orders.service';
import { Product, ProductsService } from '../../services/products.service';

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

  orderCreateForm = new FormGroup({
    provider: new FormControl('', Validators.required),
    orderDelivery: new FormControl('', [Validators.required, orderDeliveryValidator()]),
  })
  get orderDelivery() {
    return this.orderCreateForm.get('orderDelivery');
  }

  createOrder() {
    this.order = {
      id: undefined,
      orderDate: new Date(),
      orderDelivery: this.orderCreateForm.controls.orderDelivery.value,
      state: "Pending",
      provider: this.orderCreateForm.controls.provider.value,
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

function orderDeliveryValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return compareDates(new Date(), control.value) > 0 ? { invalidDate: true } : null;
  }
}

interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
  price: number;
}
