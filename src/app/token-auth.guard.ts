import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenAuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router, private cookieService: CookieService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
      console.log(this.tokenService.getExpDate());
      console.log(localStorage.getItem('isLoggedIn'));
      if(this.tokenService.getExpDate() != undefined && (new Date().getTime() < this.tokenService.getExpDate().getTime())) {
        return true;
      }
      else if( this.cookieService.get('isLoggedIn') === 'true')
      {
        console.log("The logged in cookie worked");
        return true;
      } 
      else {
        this.router.navigate(['./login']);
        return false;
      }
  }
}
