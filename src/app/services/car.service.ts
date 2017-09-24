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
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsInBhc3N3b3JkIjoiJDJhJDEwJDh2dkJRM0VnaUM0TkswTHFyVTBsMk9qZkFUNzJXeGVaYmVSMWhPNWVYRnZBc2g5SnJoYll5IiwiZXhwIjoxNTA2MjE3NjMyLCJqdGkiOiIyMiIsImlhdCI6MTUwNjIxNzUzMiwic3ViIjoibW9yYWxlc2pvZTEyQGhvdG1haWwuY29tIiwiaXNzIjoiQXV0b21hdGkgU2VydmVyIn0.Uo5w2nONiHDz1AT-NbaZctksJBgob1G9DUf5yi4LdsY' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get('http://localhost:8060/AutomatiServer/cars').toPromise();
  }
}
