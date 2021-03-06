import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog } from '@angular/material';
import { TokenService } from '../../../../../services/token.service';
import { CarService } from '../../../../../services/car.service';
import { Car } from '../../../../../model/car.model';
import { CreditCard } from '../../../../../model/creditcard.model';
import { Shipping } from '../../../../../model/shipping.model';
import { PaymentService } from '../../../../../services/payment.service';
import { PersonService } from '../../../../../services/person.service';
import { Person } from '../../../../../model/person.model';
import { UtilsService } from '../../../../../services/utils.service';
import { Transaction } from '../../../../../model/transaction.model';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['../../../../../../css/style.css']
})
export class BuyCarComponent implements OnInit {
  carId:number;
  car:Car;
  person: Person;
  shipping: Shipping;
  creditCard: CreditCard;
  now: Date;

  @ViewChild('amount') amount: ElementRef;

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router, public dialog: MdDialog, private tokenService:TokenService, private carService: CarService,
  private paymentService: PaymentService, private utilsService: UtilsService, private cookieService: CookieService) { }
  
  getUser(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
  }
  
  ngOnInit() {
    this.utilsService.setHomeState();
    this.route.params
    .subscribe(
      (params: Params) => { 
        this.carId = params['carId'];
        this.carService.getCar(this.carId).then(res => {
          this.car = res.json();
          console.log(res.json());
        });
      }
    );
    this.getUser(this.cookieService.get('email'));    
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
  
    const transaction = new Transaction(this.amount.nativeElement.value, "CAR PAYMENT", this.person, this.creditCard.number);
    
    this.paymentService.addTransaction(transaction);

    
    //update car
    const updateCar = new Car(this.car.price, this.car.year, this.car.color, this.car.condition,
       this.car.epa, this.car.lease, this.car.model, this.person, this.car.transmission, this.car.title, 
       this.car.mileage, this.car.vin, this.car.engine, this.car.id); 

    //update balance
    this.person.balance = this.person.balance + updateCar.price - this.amount.nativeElement.value;
    console.log(this.person.balance);
    this.personService.updateBalance(this.person);

    this.carService.updateCar(updateCar).then(res => {
      // if(res.json().passed) {
        window.location.reload();

       this.router.navigate(['/profile']);                    
       //} 
       /*
       else {
         let dialogRef = this.dialog.open(ConfirmDialogComponent, {
           width: '40%',
           height: '40%',
           position: { top: '0px', left: '25%', right: '25%', bottom: '50%' },
           data: { name: newUser.firstName,  action: "register" }
         }
       );
      }
     */
     console.log(res);
     });  
  }

  

}
