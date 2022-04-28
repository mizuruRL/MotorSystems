import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../products/products.component';
import { Order, OrderItem } from '../../orders/orders.component';
import { ProductsService } from '../../services/products.service';
import { OrdersService } from '../../services/orders.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product!: Product;
  public productNeeded!: ProductNeeded[];
  public productMissing: ProductMissing[] | undefined;
  public orderItems!: OrderItem[];
  public id: number = 0;
  public activeForm!: string;

  constructor(private route: ActivatedRoute, private router: Router, private prodService: ProductsService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct();
    this.getProductOrders(this.id);
    this.getProductNeeded();    
  }

  addProductQtdForm = new FormGroup({
    quantity: new FormControl('', Validators.required),
  })

  removeProductQtdForm = new FormGroup({
    quantity: new FormControl('', Validators.required),
  })
  get quantity() {
    return this.removeProductQtdForm.get('quantity');
  }

  addProductNeededForm = new FormGroup({
    quantity: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  })

  removeProductNeededForm = new FormGroup({
    quantity: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  })
  get date() {
    return this.removeProductNeededForm.get('date');
  }
  
  addProductNeeded(): void {
    let quantity: number = this.addProductNeededForm.controls.quantity.value;
    let date: Date = this.addProductNeededForm.controls.date.value;
    let existent: ProductNeeded | undefined = this.productNeeded.find(e => new Date(date).setHours(0, 0, 0, 0) == (new Date(e.neededForDate)).setHours(0, 0, 0, 0))
    
    if (existent && existent.id) {
      existent.quantityNeeded += quantity;
      this.prodService.updateProductNeeded(existent.id, existent).subscribe(res => {
        this.activeForm = "";
        window.location.reload();
      });
    }
    else {
      let p: ProductNeeded = {
        id: undefined, productId:this.id, quantityNeeded:quantity, neededForDate:date
      }
      this.prodService.addProductNeeded(p).subscribe(res => {
        this.activeForm = "";
        window.location.reload();
      });
    } 
  } 

  removeProductNeeded(): void {
    let quantity: number = this.removeProductNeededForm.controls.quantity.value;
    let date: Date = this.removeProductNeededForm.controls.date.value;
    let existent: ProductNeeded | undefined = this.productNeeded.find(e => new Date(date).setHours(0, 0, 0, 0) == (new Date(e.neededForDate)).setHours(0, 0, 0, 0))
    if (existent && existent.id) {
      existent.quantityNeeded -= quantity;
      if (existent.quantityNeeded <= 0) {
        this.prodService.deleteProductNeeded(existent.id).subscribe(res => {
          this.activeForm = "";
          window.location.reload();
        });
      }
      else {
        this.prodService.updateProductNeeded(existent.id, existent).subscribe(res => {
          this.activeForm = "";
          window.location.reload();
        })
      }
    }
  }

  addProductAvailable(): void {
    let quantity: number = this.addProductQtdForm.controls.quantity.value;

    this.product.availableQuantity += quantity

    this.prodService.updateProduct(this.id, this.product).subscribe(res => {
      this.activeForm = "";
      window.location.reload();
    });
  }

  removeProductAvailable(): void {
    let quantity: number = this.removeProductQtdForm.controls.quantity.value;

    this.product.availableQuantity -= quantity;

    this.prodService.updateProduct(this.id, this.product).subscribe(res => {
      this.activeForm = "";
      window.location.reload();
    });
  }

  getProductOrders(prodId: number) {
    this.orderService.getOrderItemsByProduct(prodId).subscribe(res => {
      this.orderItems = res;
      this.orderItems.forEach(item => {
        this.orderService.getOrder(item.orderId).subscribe(order => {
          item.order = order;
        })
      })
      console.log("ORDERS: ", this.orderItems);
    });
  }

  getProduct() {
    this.prodService.getProduct(this.id).subscribe((product: Product) => {
      this.product = product
      this.removeProductQtdForm.controls["quantity"].addValidators(availableProductValidator(this.product.availableQuantity));
      console.log(this.product);
    });
  }

  getProductNeeded() {
    this.prodService.getProductNeeded(this.id).subscribe(res => {
      this.productNeeded = res;
      let dates: Date[] = [];
      res.forEach(need => dates.push(need.neededForDate));
      this.removeProductNeededForm.controls["date"].addValidators(removeNeededValidator(dates));
      this.sortByUrgency();
      this.getProductMissing();
    });
  }

  sortByUrgency(): void {
    this.productNeeded.sort((a, b) => {      
      if (a.neededForDate < b.neededForDate) {
        return -1;
      }
      else if (a.neededForDate > b.neededForDate) {
        return 1;
      }
      return 0;
    });
  }

  getProductMissing() {
    let current: number = this.product.availableQuantity;
    for (let i = 0; i < this.productNeeded.length; i++) {
      current -= this.productNeeded[i].quantityNeeded;
      if (current < 0) {
        this.productMissing = this.productNeeded.slice(i).map(object => ({ ...object }))
        this.productMissing[0].quantityNeeded = - current;
        break;
      }
    }
  }
}

export function availableProductValidator(availableQtd: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let result = availableQtd - control.value;
    return result < 0 ? { invalidQuantity: true } : null;
  }
}

export function removeNeededValidator(dates: Date[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let result = dates.find(d => compareDates(d, control.value)==0);
    return result ? null : { invalidDate: true };
  }
}

export interface ProductNeeded{
  id: number | undefined;
  productId: number;
  quantityNeeded: number;
  neededForDate: Date;
}

export interface ProductMissing {
  quantityNeeded: number;
  neededForDate: Date;
}

export function compareDates(d1: Date, d2: Date): number {
  
  return new Date(d1).setHours(0, 0, 0, 0) == new Date(d2).setHours(0, 0, 0, 0) ? 0 : 
    new Date(d1).setHours(0, 0, 0, 0) > new Date(d2).setHours(0, 0, 0, 0) ? 1 : -1;
  
}



