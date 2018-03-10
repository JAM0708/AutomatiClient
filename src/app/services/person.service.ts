import { TokenService } from './token.service';
import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { State } from "../model/state.model";
import { ZipCode } from "../model/zipcode.model";
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';
import { CreditCard } from '../model/creditcard.model';
import { Shipping } from '../model/shipping.model';
import { Person } from '../model/person.model';


@Injectable()
export class PersonService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp) {}

  addPerson(person: Person) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   // this.users.push(user);
   // console.log(user);
   console.log(person);
    //add user
  
      return  this.http.post('http://localhost:8060/AutomatiServer/user/register', {
      "firstName": person.firstName,
      "lastName": person.lastName, 
      "email": person.email, 
      "street": person.street, 
      "city": person.city,
      "password": person.password,
      "state": {"name": person.state.name},
      "role": {"name": person.role.name}, 
      }, options).toPromise(); 
  }

  updatePerson(person: Person) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return  this.http.post('http://localhost:8060/AutomatiServer/user/update', {
      "id": person.id,
      "firstName": person.firstName,
      "lastName": person.lastName, 
      "email": person.email, 
      "street": person.street, 
      "city": person.city,
      "password": person.password,
      "state": {"name": person.state.name},
      "role": {"name": person.role.name}, 
      "balance": person.balance
      }, options).toPromise();
  }

  saveShipping(shipping: Shipping) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return  this.http.post('http://localhost:8060/AutomatiServer/user/updateShipping', {
      "firstName": shipping.firstName,
      "lastName": shipping.lastName, 
      "street": shipping.street, 
      "city": shipping.city,
      "state": {"name": shipping.state.name},
      "person": {"email": shipping.person.email}
      }, options).toPromise();
  }

  getCars(email: string) {
    return this.http.get('http://localhost:8060/AutomatiServer/cars?email=' + email).toPromise();
  }

  login(email: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8060/AutomatiServer/user/login', {
      "email": email,
       "password": password
    }, options).toPromise();
  }

  getPerson(email: string) {
    console.log(email);
    return this.http.get('http://localhost:8060/AutomatiServer/user/userEmail?email=' + email).toPromise();
  }

  getStates() {
    return this.http.get('http://localhost:8060/AutomatiServer/user/state').toPromise();
  }
  

   getZipCodes(stateName: string) {
     return this.http.get('http://localhost:8060/AutomatiServer/user/zipcode?state=' + stateName).toPromise();
    }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['Login']);
  }

  getShippings(email: string) {
    return this.http.get('http://localhost:8060/AutomatiServer/user/shipsAddress?email=' + email).toPromise();
  }

  getShipping(id: number) {
    return this.http.get('http://localhost:8060/AutomatiServer/user/shipAddr?id=' + id).toPromise();
  }
}
