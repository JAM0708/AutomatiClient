import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenService {

  private jwtToken: string;
  private expDate;
  private decodedToken;
  private isLoggedIn: boolean = false;

  constructor(private jwtHelper: JwtHelper, private cookieService: CookieService) { }

  setJwtInfo(jwtToken: string) {
    this.jwtToken = jwtToken;
    console.log(jwtToken);
    this.expDate = this.jwtHelper.getTokenExpirationDate(jwtToken);
    this.decodedToken = this.jwtHelper.decodeToken(jwtToken);

    this.cookieService.set('isLoggedIn', 'true', this.expDate);
    this.cookieService.set('email', this.decodedToken.sub);
    console.log(this.decodedToken);
    console.log(this.expDate);
    this.isLoggedIn = true;
  }

  getJwt() {
    return this.jwtToken;
  }

  getExpDate() {
    return this.expDate;
  }

  getSubject() {
    return this.cookieService.get('email');
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }
}
