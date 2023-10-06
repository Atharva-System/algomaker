import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavigationService } from '../services/Navigation/navigation.service';
import { TokenService } from '../services/tokenservice/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private navigation:NavigationService,private tokenService:TokenService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
    if(this.tokenService.getToken()){
      return true;
    }
    this.navigation.navigateTo('/login');
    return false;
  }
}