import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Service, ServicesService } from '../services/services.service';

@Component({
  selector: 'app-services-worker',
  templateUrl: './services-worker.component.html',
  styleUrls: ['./services-worker.component.css']
})
export class ServicesWorkerComponent implements OnInit {

  public services: Service[] | undefined;
  public openServices: Service[] | undefined;
  public user: string | undefined;

  constructor(private sService: ServicesService, private userService: AuthorizeService, private router: Router) { }

  ngOnInit(): void {
    this.sService.getServices().subscribe(res => {
      this.services = res;
      this.openServices = this.services.filter(s => s.state != "Finished" && s.state != "Cancelled");
    });
    this.userService.getUser().subscribe(res => {
      this.user = res!.name
    });
  }

  goServiceDetails(id: number): void{
    this.router.navigateByUrl("service-details/"+id);
  }

  acceptService(event: any, service: Service): void {
    event.stopPropagation();
    while (!this.user) {};
    service.assignedWorker = this.user;
    service.state = "processing";
    this.sService.updateService(service).subscribe(res => {})
  }

}
