import { AuthappService } from './authapp.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  constructor( private auth: AuthappService , private nav :Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if( this.auth.isLogged())
      return true
    else
    {
      this.nav.navigate(['login'])
        return false;
    }
  }
}
