import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";

@Injectable()
export class CarService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp) {}

  saveCar() {

  }
  saveLease() {
  }

  getCars() {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get('http://localhost:8060/AutomatiServer/cars').toPromise();
  }

  getCarsByModel(model: string) {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    console.log("model name: " + model);

    return this.http.get('http://localhost:8060/AutomatiServer/cars/model?model=' + model).toPromise();
  }
}
