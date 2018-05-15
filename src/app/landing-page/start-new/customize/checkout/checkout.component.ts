import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import { UtilsService } from '../../../../services/utils.service';
import { Transaction } from '../../../../model/transaction.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../../../../css/style.css'],
  //styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  modelName: string;
  color: Color;
  engine: Engine;
  transmission: Transmission;

  tid: number;
  eid: number;
  cname: string;
  price: number;

  creditCard: CreditCard;
  shipping: Shipping;
  person: Person;
  model: Model;

  @ViewChild('amount') amount: ElementRef;

  constructor(private personService: PersonService, private tokenService: TokenService,
     private carService: CarService, 
     private router: Router, private route: ActivatedRoute, private paymentService: PaymentService, private utilsService: UtilsService) { }

  

  ngOnInit() {
    this.utilsService.setHomeState();
    this.route.params
      .subscribe(
      (params: Params) => {
        this.modelName = params['name'];
        this.eid = params['engine'];
        this.tid = params['transmission'];
        this.cname = params['color'];
      }
      );
      this.price = 0;
      this.getTransmission();
      this.getModel(this.modelName);
      this.getEngine();
      this.getColor();
      this.getUser(this.tokenService.getSubject());      
  }

  getUser(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
  }

  getModel(name: string){
    this.carService.getModel(name).then(res => {
      this.model = res.json();
      this.price = this.price + this.model.modelStockPrice;
    })
  }

  getTransmission() {
    this.carService.getTransmission(this.tid).then(res => {
      this.transmission = res.json();
      this.price = this.price + this.transmission.transmissionPrice;
    })
  }

  getEngine() {
    this.carService.getEngine(this.eid).then(res => {
      this.engine = res.json();
      this.price = this.price + this.engine.stockEnginePrice;
    })
  }

  getColor() {
    this.carService.getColor(this.cname).then(res => {
      this.color = res.json();
      this.price = this.price + this.color.colorPrice;
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
    console.log(this.person);
    if(this.shipping.id == undefined) {
      this.personService.saveShipping(this.shipping);
    }

    // update or add payment
    console.log(this.creditCard.id);
    if(this.creditCard.id == undefined) {
      this.paymentService.addCard(this.creditCard);
    }
    // for now, change later
      //const transaction = new Transaction(this.amount.nativeElement.value, "new car payment", this.person, this.creditCard.number);
      //this.paymentService.addTransaction(transaction);

  
    
    //update car
    const newCar = new Car(this.price, 2018, this.color, new Condition("NEW"), null, null,
     new Model(this.modelName), this.person, this.transmission, "CLEAN", 0, "4T1ZEQWSD", this.engine);


    this.person.balance = this.person.balance + newCar.price - this.amount.nativeElement.value;

    this.personService.updateBalance(this.person);
    
    this.carService.addCar(newCar).then(res => {
       this.router.navigate(['/profile']);                    
     console.log(res);
     });  


  }
}
