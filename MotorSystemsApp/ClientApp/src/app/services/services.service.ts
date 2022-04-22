import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicles.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getServicesByUsername(username: string): Observable<Service[]>{
    return this.http.get<Service[]>(this.baseUrl + 'api/services/' + username);
  }

  addServiceRequest(service: Service): Observable<Service> {
    return this.http.post<Service>(this.baseUrl + 'api/services/', service);
  }
}

export interface Service{
  assignedWorker: string | undefined;
  client: string;
  state: string;
  serviceType: string;
  vehiclePlate: string
}


