import { Component, OnInit } from '@angular/core';
import { Color } from '../../../../model/color.model';
import { Engine } from '../../../../model/engine.model';
import { Transmission } from '../../../../model/transmission.model';
import { CarService } from '../../../../services/car.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Person } from '../../../../model/person.model';
import { TokenService } from '../../../../services/token.service';
import { PersonService } from '../../../../services/person.service';
import { CreditCard } from '../../../../model/creditcard.model';
import { Shipping } from '../../../../model/shipping.model';
import { PaymentService } from '../../../../services/payment.service';
import { Car } from '../../../../model/car.model';
import { Condition } from '../../../../model/condition.model';
import { Model } from '../../../../model/model.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../../../../css/style.css'],
  //styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  modelName: string;
  private color: Color;
  private engine: Engine;
  private transmission: Transmission;

  private tid: number;
  private eid: number;
  private cname: string;

  private creditCard: CreditCard;
  private shipping: Shipping;
  private person: Person;
  constructor(private personService: PersonService, private tokenService: TokenService,
     private carService: CarService, 
     private router: Router, private route: ActivatedRoute, private paymentService: PaymentService) { }

  

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.modelName = params['name'];
        this.eid = params['engine'];
        this.tid = params['transmission'];
        this.cname = params['color'];
      }
      );
      this.getTransmission();
      this.getEngine();
      this.getColor();
      this.getUser(this.tokenService.getSubject());
  }

  getUser(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
  }

  getTransmission() {
    this.carService.getTransmission(this.tid).then(res => {
      this.transmission = res.json();
    })
  }

  getEngine() {
    this.carService.getEngine(this.eid).then(res => {
      this.engine = res.json();
    })
  }

  getColor() {
    this.carService.getColor(this.cname).then(res => {
      this.color = res.json();
    })
  }

  cardSelected($event) {
    this.creditCard = $event;
  }

  ship($event) {
    this.shipping = $event;
  }

  confirmOrder() { 

    console.log(this.shipping.id);
    if(this.shipping.id == undefined) {
      this.personService.saveShipping(this.shipping);
    }

    // update or add payment
    console.log(this.creditCard.id);
    if(this.creditCard.id == undefined) {
      this.paymentService.addCard(this.creditCard);
    }
    
    //update car
    const newCar = new Car(23000, 2018, this.color, new Condition("NEW"), null, null,
     new Model(this.modelName), this.person, this.transmission, "CLEAN", 0, "4T1ZEQWSD", this.engine);

    
    this.carService.addCar(newCar).then(res => {
       this.router.navigate(['/profile']);                    
     console.log(res);
     });  
  }
}
