import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../products/products.component';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public file: File | null = null;

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(productForm: NgForm) {
    const formData = new FormData();
    formData.append('file', this.file!, this.file!.name);
    this.service.uploadProductImage(formData).subscribe(res => {
      let prod: Product = productForm.value;
      prod.imgUrl = "/assets/images/" + this.file!.name;
      this.service.createProduct(prod).subscribe(res => {
        this.router.navigateByUrl("products");
      });
    });      
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile(){
    const formData = new FormData();
    formData.append('file', this.file!, this.file!.name);

    this.service.uploadProductImage(formData).subscribe(res => {
      console.log(res);
    });
  }
}
