import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl + 'api/vehicles/');
  }

  getVehicle(plate: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.baseUrl + 'api/vehicles/' + plate);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseUrl + 'api/vehicles/', vehicle);
  }
}

export interface Vehicle {
  plate: string;
  type: string;
  brand: string;
  model: string;
  client: string;
}
