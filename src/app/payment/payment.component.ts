import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { EventEmitter } from '@angular/core';
import { Car } from '../model/car.model';
import { CreditCard } from '../model/creditcard.model';
import { Person } from '../model/person.model';
import { TokenService } from '../services/token.service';
import { PaymentService } from '../services/payment.service';
import { PersonService } from '../services/person.service';
import { CarService } from '../services/car.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['../../css/style.css']
})
export class PaymentComponent implements OnInit {

  carId: number;
  car: Car;
  balance: number;
  card: CreditCard;
  @Output()
  selectCard = new EventEmitter<CreditCard>();
  creditCards: CreditCard[];
  person: Person;
  @ViewChild('f') slForm: NgForm;
  @ViewChild('f2') form2: NgForm;
  show: boolean;

  constructor(private cookieService: CookieService, public dialog: MdDialog, private tokenService:TokenService,private paymentService: PaymentService, private personService: PersonService, private carService: CarService, private router: Router, private route: ActivatedRoute) { 
  
  }
  showOrHide() {
    this.show = !this.show;
  }
  
  getPerson(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
  }

  getCreditCards(email: string) {
    this.paymentService.getCreditCards(email).then(res => {
      this.creditCards = res.json();
    });
  }

  getCreditCard(id: number) {
    this.paymentService.getCreditCard(id).then(res => {
      this.card = res.json();
    });
  }

  ngOnInit() {
      this.getCreditCards(this.cookieService.get('email'));
      this.getPerson(this.cookieService.get('email'));
    }

    onSubmit(form: NgForm) {
      
      const value = form.value;
      const creditCard = new CreditCard(value.number, value.expDate, value.csc, this.person);

      console.log(creditCard);
      this.selectCard.emit(creditCard);
  
      }

    
      onSubmit2(form: NgForm) {

        const value = form.value;
        console.log(value.card);

        this.getCreditCard(value.card);
        
        this.selectCard.emit(this.card);

      }
}

