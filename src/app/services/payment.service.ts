import { TokenService } from './token.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { CreditCard } from '../model/creditcard.model';
import { Transaction } from '../model/transaction.model';

@Injectable()
export class PaymentService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp, private tokenService: TokenService) {}

  addCard(creditCard: CreditCard) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    console.log(creditCard.id);
    return  this.http.post('http://localhost:8060/AutomatiServer/creditCard', {
      "number": creditCard.number,
      "expDate": creditCard.expDate,
      "csc": creditCard.csc, 
      "owner": {"email": creditCard.person.email} ,
      }, options).toPromise();
  }

  getCreditCards(email: string) {
    return this.http.get('http://localhost:8060/AutomatiServer/creditCard?email=' + email).toPromise();
  }

  getCreditCard(number: string) {
    return this.http.get('http://localhost:8060/AutomatiServer/card?id=' + number).toPromise();
  }

  addTransaction(transaction: Transaction) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return  this.http.post('http://localhost:8060/AutomatiServer/transaction', {
      "amount": transaction.amount,
      "description": transaction.description,
      "person": {"email": transaction.person.email},
      "card": {"id": transaction.creditCard.id}
      }, options).toPromise();
  }

}
