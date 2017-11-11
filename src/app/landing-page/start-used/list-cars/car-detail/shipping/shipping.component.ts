import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../../../model/user.model';
import { Subscription } from 'rxjs';
import { State } from '../../../../../model/state.model';
import { ZipCode } from '../../../../../model/zipcode.model';
import { UserService } from '../../../../../services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog } from '@angular/material';
import { TokenService } from '../../../../../services/token.service';
import { NgForm } from '@angular/forms';
import { Role } from '../../../../../model/role.model';
import { ConstVariables } from '../../../../../app.const';
import { CarService } from '../../../../../services/car.service';
import { Car } from '../../../../../model/car.model';
import { Shipping } from '../../../../../model/shipping.model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  private carId:number;
  private car: Car;
  public user: User;
  public email: string;
  public sub: Subscription;

  states: State[];
  zipcodes: ZipCode[];
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, public dialog: MdDialog, private tokenService:TokenService, private carService: CarService) { }

  
  getUser(email: string) {
    this.userService.getUser(email).then(res => {
      this.user = res.json();
    });
  }

  stateSelect(state) {
    console.log(state);
    if(state.name !== undefined) {
      this.userService.getZipCodes(state.name).then(res => {
        this.zipcodes = res.json();
        console.log(this.zipcodes);
      });
    }
   // console.log("here"); 
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
    this.userService.getStates().then(res => {
      this.states = res.json();
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;

   
    const newShippingAddr = new Shipping(value.firstName, value.lastName, value.street, value.city, 
      new State(value.state.id, value.state.name), this.user);
    this.userService.saveShipping(newShippingAddr).then(res => {
     // if(res.json().passed) {
      this.router.navigate(['/buyCar', { carId: this.carId }], {relativeTo: this.route});                    
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
