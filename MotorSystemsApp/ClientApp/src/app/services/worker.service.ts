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

  addWorker(user: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.baseUrl + 'api/workers/', user);
  }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.baseUrl + 'api/workers');
  }
}

export interface Worker {
  id: string;
  username: string;
  worktitle: string;
  contractend: Date;
  salary: number;
}
