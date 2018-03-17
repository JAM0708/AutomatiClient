import { State } from "./state.model";
import { Role } from "./role.model";


export class Person {
  public firstName: string;
  public lastName: string;
  public email: string;  
  public street: string;
  public city: string;
  public password: string;
  public state: State;
  public role: Role;
  public id: number;
  public balance: number;

  constructor(firstName: string, lastName: string, email: string, street: string, city: string,
              password: string, state?: State, role?: Role, balance?: number, id?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.street = street;
    this.city = city;
    this.state = state;
    this.role = role;
    this.password = password;
    this.id = id;
    this.balance = balance;
  }
}
