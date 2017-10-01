import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenAuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
      console.log(this.tokenService.getExpDate());
      if(this.tokenService.getExpDate() != undefined && (new Date().getTime() < this.tokenService.getExpDate().getTime())) {
        return true;
      }
    
      else {
        this.router.navigate(['./login']);
        return false;
      }
  }
}
