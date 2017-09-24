import { State } from "./state.model";
import { Role } from "./role.model";
import { Color } from "./color.model";
import { Condition } from "./condition.model";
import { Epa } from "./epa.model";
import { Lease } from "./lease.model";
import { Model } from "./model.model";
import { User } from "./user.model";
import { Transmission } from "./transmission.model";


export class Car {
  public price: number;
  public carYear: number;
  public color: Color;  
  public condition: Condition;
  public epa: Epa;
  public lease: Lease;
  public model: Model;
  public person: User;
  public transmission: Transmission;

  constructor (price: number, 
    year: number,
     color: Color,
     cond: Condition, epa: Epa, lease: Lease, model: Model, person: User, transmission: Transmission) {
        this.price = price;
        this.carYear = year;
        this.color = color;
        this.condition = cond;
        this.epa = epa;
        this.lease = lease;
        this.model = model;
        this.person = person;
        this.transmission = transmission;
  }

  
}
