import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../products/products.component';
import { ProductsService } from '../../services/products.service';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-item-add',
  templateUrl: './service-item-add.component.html',
  styleUrls: ['./service-item-add.component.css']
})
export class ServiceItemAddComponent implements OnInit {

  public products: Product[] = [];

  constructor(private servService: ServicesService, private prodService: ProductsService) { }

  ngOnInit(): void {
  }

  populateProducts() {
    this.prodService.getProducts().
      subscribe(products => this.products = products);
  }

  addItem(form: NgForm) {

  }
}
