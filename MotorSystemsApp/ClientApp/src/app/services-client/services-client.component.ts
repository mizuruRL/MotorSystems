import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Service, ServicesService } from '../services/services.service';

@Component({
  selector: 'app-services-client',
  templateUrl: './services-client.component.html',
  styleUrls: ['./services-client.component.css']
})
export class ServicesClientComponent implements OnInit {

  public services: Service[] | undefined;
  public openServices: Service[] | undefined;
  public userHistory: Service[] | undefined;
  public user: string | undefined;
  public showHistory: boolean = false;
  public toShow: Service[] | undefined;

  constructor(private router: Router, private service: ServicesService, private userService: AuthorizeService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user!.name;
      this.service.getServicesByUsername(this.user!).subscribe(services => {
        this.services = services;
        this.openServices = this.services.filter(s => s.state != "Finished" && s.state != "Cancelled");
        this.userHistory = this.services.filter(s => s.state == "Finished" || s.state == "Cancelled");
        this.toShow = this.openServices;
      });
    });    
  }

  switchToShow(): void {
    this.showHistory = !this.showHistory;
    this.toShow = this.showHistory ? this.userHistory : this.openServices;
    console.log(this.toShow);
  }

  goServiceDetails(id: number): void {
    this.router.navigateByUrl("services/" + id);
  }
}
