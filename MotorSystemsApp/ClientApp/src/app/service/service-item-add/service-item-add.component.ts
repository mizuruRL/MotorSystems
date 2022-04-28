import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../products/products.component';
import { ProductsService } from '../../services/products.service';
import { Service, ServiceItem, ServiceItemItem, ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-item-add',
  templateUrl: './service-item-add.component.html',
  styleUrls: ['./service-item-add.component.css']
})
export class ServiceItemAddComponent implements OnInit {

  public products: Product[] = [];
  public itemItems: ServiceItemItem[] = [];
  public id: number | undefined;

  constructor(private servService: ServicesService, private prodService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.populateProducts();
    this.id=this.route.snapshot.params['id'];
    this.servService.getServiceItemItems(this.id!).subscribe()
  }

  populateProducts() {
    this.prodService.getProducts().
      subscribe(products => this.products = products);
  }

  addToService(form: NgForm) {
    //serviceId: number;
    //description: string;
    //items: ServiceItemItem[];
    //price: number;
    let item: ServiceItem = form.value;
    item.serviceId = this.id!;
    console.log(item);
    this.servService.addServiceItem(item).subscribe(res => {
      let itemId = res.id;
      console.log("IDDDD: ",itemId)
      console.log("ItemItems: ", this.itemItems);
      this.itemItems.forEach(ii => {
        ii.serviceItemId = itemId;
        ii.product = undefined;
        this.servService.addServiceItemItem(ii).subscribe(res => {
          console.log(res);
          this.router.navigateByUrl("services/" + this.id);
        });
        
      })      
    });
  }

  addItem(form: NgForm) {
    //id: number | undefined;
    //serviceItemId: number;
    //product: Product | undefined;
    //productId: number | undefined;
    //quantity: number;
    let item: ServiceItemItem = form.value;
    this.prodService.getProduct(item.productId!).subscribe(res => {
      item.productId = res.id;
      item.product = res;
      this.itemItems.push(item);
      console.log("Item: ", item);
    });
    //item.serviceItemId = this.id!;
    
    
    //this.servService.addServiceItemProduct(item).subscribe(res => {
    //  console.log(res);
    //})
  }
}


