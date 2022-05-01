import { Component } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  showWorkerOptions: boolean = false;
  showAdminOptions: boolean = false;

  constructor(private service: AuthorizeService, private workerService: WorkerService) { }

  ngOnInit() {
    this.service.getUser().subscribe(res => {
      if (res) {
        this.workerService.getWorker(res.sub!).subscribe(res => {
          if (res) {
            this.showWorkerOptions = true
            if (res.isAdmin) {
              this.showAdminOptions = true
            }
          }
        })
      } 
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }  
}
