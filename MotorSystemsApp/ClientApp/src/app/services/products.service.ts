import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl + 'api/products')
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + 'api/products/' + id)
  }

  getProductNeeded(id: number): Observable<ProductNeeded[]> {
    return this.http.get<ProductNeeded[]>(this.baseUrl + 'api/productsNeeded/' + id)
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'api/products', product);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put<Product>(this.baseUrl + 'api/products/' + id, product);
  }

  updateProductNeeded(id: number, product: ProductNeeded) {
    return this.http.put<ProductNeeded>(this.baseUrl + 'api/productsNeeded/' + id, product);
  }

  addProductNeeded(product: ProductNeeded) {
    return this.http.post<ProductNeeded>(this.baseUrl + 'api/productsNeeded/', product);
  }

  deleteProductNeeded(id: number) {
    return this.http.delete<ProductNeeded>(this.baseUrl + 'api/productsNeeded/' + id);
  }

  uploadProductImage(img: FormData) {
    return this.http.post<FormData>(this.baseUrl + 'api/images/', img);
  }
}

export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  quantityNeeded: number;
  availableQuantity: number;
  missingQuantity: number;
  daysUntilNextNeed: number;
  imgUrl: string;
}

export interface ProductNeeded {
  id: number | undefined;
  productId: number;
  quantityNeeded: number;
  neededForDate: Date;
}

export interface ProductMissing {
  quantityNeeded: number;
  neededForDate: Date;
}
