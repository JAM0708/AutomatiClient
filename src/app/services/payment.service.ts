import { TokenService } from './token.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { CreditCard } from '../model/creditcard.model';
import { Transaction } from '../model/transaction.model';
import {environment} from "../../environments/environment";


@Injectable()
export class PaymentService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp, private tokenService: TokenService) {}

  addCard(creditCard: CreditCard) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    console.log(creditCard.id);
    return  this.http.post(environment.apiUrl + 'creditCard', {
      "number": creditCard.number,
      "expDate": creditCard.expDate,
      "csc": creditCard.csc, 
      "owner": {"email": creditCard.person.email} ,
      }, options).toPromise();
  }

  getCreditCards(email: string) {
    return this.http.get(environment.apiUrl + 'creditCard?email=' + email).toPromise();
  }

  getCreditCard(number: string) {
    return this.http.get(environment.apiUrl + 'card?id=' + number).toPromise();
  }

  addTransaction(transaction: Transaction) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return  this.http.post(environment.apiUrl + 'transaction', {
      "amount": transaction.amount,
      "description": transaction.description,
      "person": {"email": transaction.person.email},
      "card": {"id": transaction.creditCard.id}
      }, options).toPromise();
  }

}
