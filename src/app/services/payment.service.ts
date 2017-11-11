import { TokenService } from './token.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { CreditCard } from '../model/creditcard.model';

@Injectable()
export class PaymentService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp, private tokenService: TokenService) {}

  addCard(creditCard: CreditCard) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    console.log(creditCard.user.email);
    return  this.http.post('http://localhost:8060/AutomatiServer/creditCard', {
      "number": creditCard.number,
      "expDate": creditCard.expDate,
      "csc": creditCard.csc, 
      "owner": {"email": creditCard.user.email} ,
      }, options).toPromise();
  }
}
