import { Order } from '../orders/orders.component';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'api/orders')
  }

  getOrdersByProduct(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'api/orders/' + id);
  }


}
