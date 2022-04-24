import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable, of, Subject } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthorizeService, IUser } from '../../api-authorization/authorize.service';
import { WorkerService } from '../services/worker.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerGuard implements CanActivate {

  
  constructor(private wService: WorkerService, private authService: AuthorizeService, private router: Router){ }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user: string = "";
    return this.authService.getUser().pipe(
      switchMap(res => {
        user = res!.name!;
        return user;
      }),
      switchMap(res => {
        return this.wService.getWorker(user).pipe(
          map(res => {return true}),
          catchError(err => { this.router.navigateByUrl("not-authorized"); return of(false) }))
      })
    )    
  }
}
