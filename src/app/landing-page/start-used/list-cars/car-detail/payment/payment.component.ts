import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../../../../../model/car.model';
import { CarService } from '../../../../../services/car.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { State } from '../../../../../model/state.model';
import { ZipCode } from '../../../../../model/zipcode.model';
import { UserService } from '../../../../../services/user.service';
import { CreditCard } from '../../../../../model/creditcard.model';
import { User } from '../../../../../model/user.model';
import { TokenService } from '../../../../../services/token.service';
import { PaymentService } from '../../../../../services/payment.service';
import { MdDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private carId: number;
  private car: Car;
  private user: User;
  @ViewChild('f') slForm: NgForm;
  constructor(public dialog: MdDialog, private tokenService:TokenService,private paymentService: PaymentService, private userService: UserService, private carService: CarService, private router: Router, private route: ActivatedRoute) { 
  
  }

  getUser(email: string) {
    this.userService.getUser(email).then(res => {
      this.user = res.json();
    });
  }

  ngOnInit() {
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
      this.getUser(this.tokenService.getSubject());
      console.log(this.user) 
    }
    onSubmit(form: NgForm) {
      
      const value = form.value;
      // const dateString = toDateStr(new Date());
      ;
      const creditCard = new CreditCard(value.number, value.expDate, value.csc, this.user);
      console.log(creditCard);
      this.paymentService.addCard(creditCard).then(res => {
        if(res.json().passed) {
          this.router.navigate(['/shipping', { carId: this.carId }], {relativeTo: this.route});              
        //  this.router.navigate(['/shipping'], {relativeTo: this.route});
        } else {
          let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '40%',
            height: '40%',
            position: { top: '0px', left: '25%', right: '25%', bottom: '50%' },
            data: { name: creditCard.number,  action: "register" }
          });
        }
      })
      }
}

