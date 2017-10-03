import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class TokenService {

  private jwtToken: string;
  private expDate;
  private decodedToken;
  
  constructor(private jwtHelper: JwtHelper) { }

  setJwtInfo(jwtToken: string) {
    this.jwtToken = jwtToken;
    console.log(jwtToken);
    this.expDate = this.jwtHelper.getTokenExpirationDate(jwtToken);
    this.decodedToken = this.jwtHelper.decodeToken(jwtToken);
    console.log(this.decodedToken);
    console.log(this.expDate);
  }

  getJwt() {
    return this.jwtToken;
  }

  getExpDate() {
    return this.expDate;
  }

  getSubject() {
    return this.decodedToken.sub;
  }
}
