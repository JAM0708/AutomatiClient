import { State } from "./state.model";
import { Role } from "./role.model";


export class User {
  public firstName: string;
  public lastName: string;
  public email: string;  
  public street: string;
  public city: string;
  public password: string;
  public state: State;
  public role: Role;

  constructor(firstName: string, lastName: string, email: string, street: string, city: string,
              password: string, state?: State, role?: Role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.street = street;
    this.city = city;
    this.state = state;
    this.role = role;
    this.password = password;
  }
}
