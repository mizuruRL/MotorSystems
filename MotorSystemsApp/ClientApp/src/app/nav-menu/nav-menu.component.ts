import { Component } from '@angular/core';
import { AuthorizeService } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  showWorkerOptions: boolean=false

  constructor(private service: AuthorizeService) { }

  ngOnInit() {
    this.service.getUser().subscribe(res => {
      if (res) this.showWorkerOptions = true
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }  
}
