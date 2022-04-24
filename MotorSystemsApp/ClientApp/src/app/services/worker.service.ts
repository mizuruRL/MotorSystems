import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getWorker(username: string): Observable<Worker> {
    return this.http.get<Worker>(this.baseUrl + 'api/workers/' + username);
  }
}
