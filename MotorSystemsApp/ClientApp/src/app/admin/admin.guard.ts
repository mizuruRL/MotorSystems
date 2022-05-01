import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { User, UserManager } from 'oidc-client';
import { from, Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { WorkerService } from '../services/worker.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private wService: WorkerService, private authService: AuthorizeService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let userid: string = "";
    return this.authService.getUser().pipe(
      switchMap(res => {
        if (!res) {
          this.router.navigateByUrl("not-authorized");
          return of(false);
        }
        else {
          userid = res.sub!;
          return userid;
        }        
      }),
      switchMap(res => {
        return this.wService.getWorker(userid).pipe(
          map(res => {
            console.log(res);
            if (res.isAdmin) { return true }
            else { this.router.navigateByUrl("not-authorized"); return false}
          }),
          catchError(err => { this.router.navigateByUrl("not-authorized"); return of(false) }))
      })
    )
  }
  
}
