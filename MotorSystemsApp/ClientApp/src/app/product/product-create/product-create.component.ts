import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(productForm: NgForm) {
    console.log(productForm);
    this.service.createProduct(productForm.value).subscribe(res => {
      this.router.navigateByUrl("products");
    });
  }
}
