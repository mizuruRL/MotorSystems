import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../products/products.component';
import { Vehicle } from './vehicles.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getServicesByUsername(username: string): Observable<Service[]>{
    return this.http.get<Service[]>(this.baseUrl + 'api/services/servicesByUsername/' + username);
  }

  addServiceRequest(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl + 'api/services/', service);
  }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.baseUrl + 'api/services/');
  }

  updateService(s: Service): Observable<Service[]> {
    return this.http.put<Service[]>(this.baseUrl + 'api/services/'+ s.id, s);
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(this.baseUrl + 'api/services/' + id);
  }

  addServiceItemItem(sii: ServiceItemItem): Observable<ServiceItemItem> {
    return this.http.post<ServiceItemItem>(this.baseUrl + 'api/serviceItemItems/', sii);
  }

  addServiceItem(item: ServiceItem): Observable<ServiceItem> {
    return this.http.post<ServiceItem>(this.baseUrl + 'api/serviceItems/', item);
  }

  getServiceItemItems(serviceItemId: number): Observable<ServiceItemItem> {
    return this.http.get<ServiceItemItem>(this.baseUrl + 'api/ServiceItemItems/' + serviceItemId);
  }
}

export interface Service{
  id: number | undefined;
  assignedWorker: string | undefined;
  client: string;
  state: string;
  type: string;
  vehiclePlate: string;
  requestDate: Date;
  price: number | undefined;
  serviceItems: ServiceItem[] | undefined;
}

export interface ServiceItem {
  id: number;
  serviceId: number;
  description: string;
  items: ServiceItemItem[];
  price: number;
  //service: string;
}

export interface ServiceItemItem {
  id: number | undefined;
  serviceItemId: number;
  //service: string;
  product: Product | undefined;
  productId: number | undefined;
  quantity: number;
}





