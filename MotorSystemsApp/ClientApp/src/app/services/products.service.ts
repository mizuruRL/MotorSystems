import { Product } from '../products/products.component'
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.baseUrl +'api/products')
    }
}

//export const PRODUCTS: Product[] = [
//    { Id: 1, Name: "prod1" },
//    { Id: 2, Name: "prod2" },
//]
