import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Car } from '../../../../../model/car.model';
import { CarService } from '../../../../../services/car.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { State } from '../../../../../model/state.model';
import { ZipCode } from '../../../../../model/zipcode.model';
import { CreditCard } from '../../../../../model/creditcard.model';
import { TokenService } from '../../../../../services/token.service';
import { PaymentService } from '../../../../../services/payment.service';
import { MdDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../../../confirm-dialog/confirm-dialog.component';
import { EventEmitter } from '@angular/core';
import { Person } from '../../../../../model/person.model';
import { PersonService } from '../../../../../services/person.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['../../../../../../css/style.css']
})
export class PaymentComponent implements OnInit {

  private carId: number;
  private car: Car;
  private balance: number;
  public card: CreditCard;
  @Output()
  selectCard = new EventEmitter<CreditCard>();
  private creditCards: CreditCard[];
  private person: Person;
  @ViewChild('f') slForm: NgForm;
  @ViewChild('f2') form2: NgForm;
  public show: boolean;

  constructor(public dialog: MdDialog, private tokenService:TokenService,private paymentService: PaymentService, private personService: PersonService, private carService: CarService, private router: Router, private route: ActivatedRoute) { 
  
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

  getCreditCard(number: string) {
    this.paymentService.getCreditCard(number).then(res => {
      this.card = res.json();
    });
  }

  ngOnInit() {

      this.getPerson(this.tokenService.getSubject());
      console.log(this.person);

      this.getCreditCards(this.tokenService.getSubject());
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

