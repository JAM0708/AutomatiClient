import { State } from "./state.model";
import { Role } from "./role.model";
import { Color } from "./color.model";
import { Condition } from "./condition.model";
import { Epa } from "./epa.model";
import { Lease } from "./lease.model";
import { Model } from "./model.model";
import { Transmission } from "./transmission.model";
import { Person } from "./person.model";


export class Car {
  public price: number;
  public title: string;
  public mileage: number;
  public year: number;
  public color: Color;
  public condition: Condition;
  public epa: Epa;
  public lease: Lease;
  public model: Model;
  public person: Person;
  public transmission: Transmission;
  public id: number;

  constructor(price: number,
    year: number,
    color: Color,
    cond: Condition,
    epa: Epa,
    lease: Lease,
    model: Model,
    person: Person, 
    transmission: Transmission,
    title: string,
    mileage: number,
    id?: number) {
    this.price = price;
    this.year = year;
    this.color = color;
    this.condition = cond;
    this.epa = epa;
    this.lease = lease;
    this.model = model;
    this.person = person;
    this.transmission = transmission;
    this.title = title;
    this.mileage = mileage;
    this.id = id;
  }


}
