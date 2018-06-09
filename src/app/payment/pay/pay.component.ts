import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Person } from '../../model/person.model';
import { PersonService } from '../../services/person.service';
import { CreditCard } from '../../model/creditcard.model';
import { PaymentService } from '../../services/payment.service';
import { Transaction } from '../../model/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['../../../css/style.css']
})
export class PayComponent implements OnInit {

  person:Person;
  creditCard: CreditCard;

  @ViewChild('amount') amount: ElementRef;
  
  constructor(private router: Router, private paymentService: PaymentService, private cookieService: CookieService, private personService: PersonService) { }

  getPerson(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
  } 

  cardSelected($event) {
    this.creditCard = $event;
  }

  ngOnInit() {
    this.getPerson(this.cookieService.get('email'));
  }

  confirmOrder() {
    // update or add payment
    console.log(this.creditCard.id);
    if(this.creditCard.id == undefined) {
      this.paymentService.addCard(this.creditCard);
    }

    // add the transaction
    const transaction = new Transaction(this.amount.nativeElement.value, "CAR PAYMENT", this.person, this.creditCard.number);
    this.paymentService.addTransaction(transaction);

    // update balance
    this.person.balance = this.person.balance - this.amount.nativeElement.value;
    console.log(this.person.balance);
    this.personService.updateBalance(this.person).then(res => {
      this.router.navigate(['/profile']);
    });
  }

}
