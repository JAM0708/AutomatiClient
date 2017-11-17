import { TokenService } from './token.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { Car } from '../model/car.model';

@Injectable()
export class FaqService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp) {}

 
  getFaqs() {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get('http://localhost:8060/AutomatiServer/getFaq').toPromise();
  }
}
