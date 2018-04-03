import { TokenService } from './token.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { Car } from '../model/car.model';
import { Person } from '../model/person.model';
import {environment} from "../../environments/environment";

@Injectable()
export class CarService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp, private tokenService: TokenService) {}

  addCar(car: Car) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return  this.http.post(environment.apiUrl + 'car/save', {
      "year": car.year,
      "mileage": car.mileage,
      "title": car.title,
      "model": {"name": car.model.name},
      "color": {"name": car.color.name},
      "transmission": {"name": car.transmission.name},
      "condition": {"type": car.condition.type},
     // "epa": {"mileage": car.epa.mileage},
      "price": car.price,
      "vin": car.vin,
      "person": {"email": car.person.email},
      "engine": {"id": car.engine.id}
      }, options).toPromise();
  }
  saveLease() {
  }

  updateCar(car: Car) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return  this.http.post(environment.apiUrl + 'car/update', {
      "id": car.id,
      "year": car.year,
      "mileage": car.mileage,
      "title": car.title,
      "model": {"name": car.model.name},
      "color": {"name": car.color.name},
      "transmission": {"name": car.transmission.name},
      "condition": {"type": car.condition.type},
     // "epa": {"mileage": car.epa.mileage},
      "price": car.price,
      "vin": car.vin,
      "person": {"email": car.person.email}
      }, options).toPromise();
  }

  getCars() {
    /*
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    */

    return this.http.get(environment.apiUrl + 'cars').toPromise();
  }

  getModels() {
    return this.http.get(environment.apiUrl + 'models').toPromise();
  }

  getModel(name: string) {
    return this.http.get(environment.apiUrl + 'car/model?name='+ name).toPromise();
  }

  getCarsByModel(model: string) {
    let token = localStorage.getItem("token");
    console.log(this.tokenService.getJwt());
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.tokenService.getJwt() });
    let options = new RequestOptions({ headers: headers });
    console.log("model name: " + model);

    return this.http.get(environment.apiUrl + 'cars/model?model=' + model).toPromise();
  }

  getCar(id: number) {
    return this.http.get(environment.apiUrl + 'car?id='+ id).toPromise();
  }

  getColors() {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.apiUrl + 'colors').toPromise();
  }

  getColor(name: string) {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.apiUrl + 'color?name=' + name).toPromise();
  }

  getTransmissions() {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.apiUrl + 'transmissions').toPromise();
  }

  getTransmission(id: number) {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.apiUrl + 'transmission?id=' + id).toPromise();
  }

  getEngine(id: number) {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.apiUrl + 'engine?id=' + id).toPromise();
  }

  getEngines() {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(environment.apiUrl + 'engines').toPromise();
  }

  getCarsByPerson(email: string) {
    return this.http.get(environment.apiUrl + 'carsByPerson?email='+ email).toPromise();
  }
}
