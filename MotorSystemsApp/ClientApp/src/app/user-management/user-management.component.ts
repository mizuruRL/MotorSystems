import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService, Client } from '../services/client.service';
import { WorkerService, Worker } from '../services/worker.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  public workers: Worker[] = [];
  public clients: Client[] = [];

  constructor(private workerService: WorkerService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.populateWorkers();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserManagementDialog);
  }

  populateWorkers() {
    this.workerService.getWorkers().
      subscribe(allWorkers => this.workers = allWorkers)
  }

  deleteWorker(id: string) {
    this.workerService.deleteWorker(id).subscribe(res => location.reload());
  }

  getWorker(id: string): Worker | undefined{
    return this.workers.find(w => w.id == id);
  }

  switchAdmin(id: string) {
    let worker: Worker | undefined = this.getWorker(id);
    if (worker) {
      console.log(worker);
      worker.isAdmin = !worker.isAdmin;
      console.log(worker);
      this.workerService.updateWorker(worker).subscribe(res => console.log(res));
    }    
  }
}

@Component({
  selector: 'user-management-dialog',
  templateUrl: './user-management-dialog.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementDialog implements OnInit {

  public clients: Client[] = [];
  private client: Client | undefined;

  constructor(private clientService: ClientService, private workerService: WorkerService) { }

  ngOnInit(): void {
    this.populateClients();
  }

  populateClients() {
    this.clientService.getClients().
      subscribe(allClients => { this.clients = allClients; })
  }

  addToWorker(workerForm: NgForm) {
    this.clientService.getClient(workerForm.value.id).subscribe(client => {
      this.client = client;
      let workTitle = workerForm.value.worktitle;
      let salary = workerForm.value.salary;
      let contractEnd = workerForm.value.contractend;
      let worker: Worker = { id: this.client.id, jobTitle: workTitle, salary: salary, username: client.userName, contractEndDate: contractEnd, isAdmin: false }
      this.workerService.addWorker(worker).subscribe(res=>location.reload());
    });
  }

  
}
