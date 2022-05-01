import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../services/products.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.css']
})
export class ProductRemoveComponent implements OnInit {

  public product!: Product;
  public id: number = 0;
  public selected: string = "";

  constructor(private service: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct(this.id);    
  }

  removeProductForm = new FormGroup({
    removeFrom: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required)
  })

  get quantity() {
    return this.removeProductForm.get('quantity');
  }
  get removeFrom() {
    return this.removeProductForm.get('removeFrom');
  }

  getProduct(id: number) {
    this.service.getProduct(id).subscribe(res => {
      this.product = res;
      this.removeProductForm.controls["quantity"].addValidators(availableProductValidator(this.product.availableQuantity));
    });
  }

  removeProduct(): void {
    let toUpdate: string = this.removeProductForm.controls.removeFrom.value;
    let quantity: number = this.removeProductForm.controls.quantity.value;
    

    if (toUpdate === 'Available Stock') { this.product.availableQuantity -= quantity }
    else { this.product.quantityNeeded -= quantity }

    this.service.updateProduct(this.id, this.product).subscribe(res => {
      this.router.navigateByUrl("products");
    });
  }
}

export function availableProductValidator(availableQtd: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    
    let result = availableQtd - control.value;
    return result < 0 ? { invalidQuantity: true } : null;

  }
}
