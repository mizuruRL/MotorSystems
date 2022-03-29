import { Component, OnInit } from '@angular/core';
import { Product } from '../../products/products.component';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductsService } from '../../services/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  public product!: Product;
  public id: number = 0;
  public selected: string = "";

  constructor(private service: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProduct(this.id);
  }

  getProduct(id:number) {
    this.service.getProduct(id).subscribe(res => this.product = res);
  }

  addProduct(form: NgForm): void {
    let toUpdate: string = form.value.addTo;
    console.log(toUpdate);
    let quantity: number = form.value.quantity;

    if (toUpdate === 'availableQuantity') { this.product.availableQuantity += quantity }
    else { this.product.quantityNeeded += quantity}
    
    this.service.updateProductQuantity(this.id, this.product).subscribe(res => {
      this.router.navigateByUrl("products");
    });
  }


}
