import {User} from './user.model';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class UserService {

  constructor(private router: Router) {}
  private users: User[] = [
    new User('Joe', 'AppleSeed','moralesjoe12@hotmailcom', '12 44st', 'Union City', 'NJ', 0 , 'iLuvBayern')
  ];

  addUser(user: User) {
    this.users.push(user);
    console.log(user);
  }

  login(email: string, password: string) {
    for (var index = 0; index < this.users.length; index++) {
      if(email == this.users[index].email && password == this.users[index].password)
        return this.users[index];
    }
  }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['Login']);
  }
}
