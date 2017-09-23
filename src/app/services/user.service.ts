import 'rxjs/Rx';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../model/user.model";
import { State } from "../model/state.model";
import { ZipCode } from "../model/zipcode.model";
import { Http, Response, RequestOptions, Headers, Jsonp } from '@angular/http';



@Injectable()
export class UserService {

  constructor(private router: Router, private http: Http, private jsonp: Jsonp) {}
  private users: User[] = [
    //new User('Joe', 'AppleSeed','moralesjoe12@hotmailcom', '12 44st', 'Union City', 'NJ', 0 , 'iLuvBayern')
  ];

  addUser(user: User) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   // this.users.push(user);
   // console.log(user);

    //add user
    this.http.post('http://localhost:8060/AutomatiServer/user/register', {
    "firstName": user.firstName,
    "lastName": user.lastName, 
    "email": user.email, 
    "street": user.street, 
    "city": user.city,
    "password": user.password,
    "state": {"name": user.state.name},
    "role": {"role": user.role.name}, 
    }, options).subscribe((response: Response) => {console.log(response)})
  }

  login(email: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8060/AutomaiServer/user/login', {
      "email": email,
      "password": password,
    }, options).toPromise().then(res => {
      console.log(res);
      return res;
    })
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['Login']);
  }
}
