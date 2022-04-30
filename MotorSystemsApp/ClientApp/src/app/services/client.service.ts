import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + 'api/clients')
  }

  getClient(id: string): Observable<Client> {
    return this.http.get<Client>(this.baseUrl + 'api/clients/' + id);
  }
}

export interface Client {
  id: string;
  docid: number;
  createddate: Date;
  address: string;
  city: string;
  zip: string;
  username: string;
}
