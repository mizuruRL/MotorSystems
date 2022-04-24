import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service, ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  public id: number | undefined;
  public service: Service | undefined;
  constructor(private route: ActivatedRoute, private sService: ServicesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sService.getService(this.id!).subscribe(res => {
      this.service = res;
    });
  }

}
