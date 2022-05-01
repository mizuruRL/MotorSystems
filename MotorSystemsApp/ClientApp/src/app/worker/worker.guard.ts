import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { WorkerService } from '../services/worker.service';

@Injectable({
  providedIn: 'root'
})
export class WorkerGuard implements CanActivate {


  constructor(private wService: WorkerService, private authService: AuthorizeService, private router: Router) { }

  //canActivate(
  //  route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  //let user: string = "";
  //  let userid: string = "";
  //  //this.userManager.getUser().then(res => console.log(res));
  //  //this.authService.getUser().subscribe(res => console.log(res!.sub));
  //  return this.authService.getUser().pipe(
  //    switchMap(res => {
  //      //console.log(res);
  //      //if (!res) {
  //      //  this.router.navigateByUrl("not-authorized"); return of(false);
  //      //}
  //      let userid = res!;
  //      return userid;
  //    }),
  //    switchMap(res => {
  //      return this.wService.getWorker(userid).pipe(
  //        map(res => { return true }),
  //        catchError(err => { this.router.navigateByUrl("not-authorized"); return of(false) }))
  //    })
  //  )
  //}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //let user: string = "";
    let userid: string = "";
    return this.authService.getUser().pipe(
      switchMap(res => {
        if (!res) {
          this.router.navigateByUrl("not-authorized"); return of(false);
        }
        userid = res.sub!;
        return userid;
      }),
      switchMap(res => {
        return this.wService.getWorker(userid).pipe(
          map(res => { return true }),
          catchError(err => { this.router.navigateByUrl("not-authorized"); return of(false) }))
      })
    )
  }
}
  //  return this.authService.getUser().pipe(
  //    switchMap(res => {
  //      user = res!.name!;
  //      return user;
  //    }),
  //    switchMap(res => {
  //      return this.wService.getWorker(user).pipe(
  //        map(res => {return true}),
  //        catchError(err => { this.router.navigateByUrl("not-authorized"); return of(false) }))
  //    })
  //  )    
  //}
  //canActivate(
  //  route: ActivatedRouteSnapshot,
  //  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  let user: User | null;
  //    this.userManager.getUser().then(res => res!.profile);
    

  //  return this.authService.getAccessToken().pipe(
  //    switchMap(res => {
  //      console.log(res);
  //      if (!res) {
  //        this.router.navigateByUrl("not-authorized"); return of(false);
  //      }
  //      res.
  
  //      return user;
  //    }),
  //    switchMap(res => {
  //      return this.wService.getWorker(user).pipe(
  //        map(res => { return true }),
  //        catchError(err => { this.router.navigateByUrl("not-authorized"); return of(false) }))
  //    })
  //  )
  //}
//}
