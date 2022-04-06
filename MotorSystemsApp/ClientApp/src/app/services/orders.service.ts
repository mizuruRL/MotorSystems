import { Order, OrderItem } from '../orders/orders.component';
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

  getOrderItemsByProduct(id: number): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.baseUrl + 'api/orderItems/itemsByProduct/' + id);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(this.baseUrl + 'api/orders/' + id);
  }

  getOrderItemsByOrder(orderId: number): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.baseUrl + 'api/orderItems/itemsByOrder/' + orderId);
  }

  deleteOrder(orderId: number) {
    return this.http.delete<Order>(this.baseUrl + 'api/orders/' + orderId);
  }


}
