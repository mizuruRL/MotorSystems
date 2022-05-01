import { Component } from '@angular/core';
import { User } from 'oidc-client';
import { AuthorizeGuard } from '../../api-authorization/authorize.guard';
import { AuthorizeService, IUser } from '../../api-authorization/authorize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public user: IUser | null | undefined;

  constructor(private service: AuthorizeService, private guard: AuthorizeGuard) { }

  ngOnInit() {
    this.service.getUser().subscribe(async user => {
      this.user = user;
    });
  }

}

