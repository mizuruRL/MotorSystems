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
    return this.http.put<Service[]>(this.baseUrl + 'api/services/'+s.id, s);
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(this.baseUrl + 'api/services/' + id);
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
  serviceItems: ServiceItem[] | undefined;
}

export interface ServiceItem {
  serviceId: number;
  productId: number;
  description: string;
  //service: string;
  product: Product;
  productQuantity: number;
}


