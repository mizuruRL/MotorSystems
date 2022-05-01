import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from './products.service';

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

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'api/orders', order);
  }

  createOrderItem(order: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.baseUrl + 'api/orderItems', order);
  }

  updateOrder(id:number, order: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + 'api/orders/' + id, order);
  }

}

export interface Order {
  id: number | undefined;
  orderDate: Date;
  orderDelivery: Date | undefined;
  state: string;
  provider: string;
  orderItems: OrderItem[] | undefined
}

export interface OrderItem {
  orderId: number;
  productId: number;
  order: Order;
  product: Product | undefined;
  quantity: number;
  price: number
}
