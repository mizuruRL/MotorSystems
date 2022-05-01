import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getWorker(id: string): Observable<Worker> {
    return this.http.get<Worker>(this.baseUrl + 'api/workers/' + id);
  }

  addWorker(user: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.baseUrl + 'api/workers/', user);
  }

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.baseUrl + 'api/workers');
  }

  deleteWorker(id: string) {
    return this.http.delete<Worker>(this.baseUrl + 'api/workers/'+id)
  }

  updateWorker(worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(this.baseUrl + 'api/workers/' + worker.id, worker);
  }
}

export interface Worker {
  id: string;
  username: string;
  jobTitle: string;
  contractEndDate: Date;
  salary: number;
  isAdmin: boolean;
}
