import { TokenService } from './token.service';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Http, Response, RequestOptions, Headers, Jsonp } from "@angular/http";
import { Car } from '../model/car.model';

@Injectable()
export class CarService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp, private tokenService: TokenService) {}

  saveCar() {

  }
  saveLease() {
  }

  updateCar(car: Car) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return  this.http.post('http://localhost:8060/AutomatiServer/car/update', {
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
      "person": {"email": car.person.email}
      }, options).toPromise();
  }

  getCars() {
    let token = localStorage.getItem("token");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });

    return this.http.get('http://localhost:8060/AutomatiServer/cars').toPromise();
  }

  getModels() {
    return this.http.get('http://localhost:8060/AutomatiServer/models').toPromise();
  }

  getCarsByModel(model: string) {
    let token = localStorage.getItem("token");
    console.log(this.tokenService.getJwt());
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.tokenService.getJwt() });
    let options = new RequestOptions({ headers: headers });
    console.log("model name: " + model);

    return this.http.get('http://localhost:8060/AutomatiServer/cars/model?model=' + model).toPromise();
  }

  getCar(id: number) {
    return this.http.get('http://localhost:8060/AutomatiServer/car?id='+ id).toPromise();
  }
}
