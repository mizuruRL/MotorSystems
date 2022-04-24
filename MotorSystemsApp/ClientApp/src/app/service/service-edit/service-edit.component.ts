import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service, ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {

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
