import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Service, ServicesService } from '../services/services.service';

@Component({
  selector: 'app-services-client',
  templateUrl: './services-client.component.html',
  styleUrls: ['./services-client.component.css']
})
export class ServicesClientComponent implements OnInit {

  public services: Service[] | undefined;

  constructor(private service: ServicesService, private userService: AuthorizeService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.service.getServicesByUsername(user!.name!).subscribe(services => {
        this.services = services;
      });
    });    
  }
}
