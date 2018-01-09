import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { State } from '../../../../../model/state.model';
import { ZipCode } from '../../../../../model/zipcode.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog } from '@angular/material';
import { TokenService } from '../../../../../services/token.service';
import { NgForm } from '@angular/forms';
import { Role } from '../../../../../model/role.model';
import { ConstVariables } from '../../../../../app.const';
import { CarService } from '../../../../../services/car.service';
import { Car } from '../../../../../model/car.model';
import { Shipping } from '../../../../../model/shipping.model';
import { Person } from '../../../../../model/person.model';
import { PersonService } from '../../../../../services/person.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  @ViewChild('f2') sl2Form: NgForm;
  @Output() 
  shpData = new EventEmitter<Shipping>();
  private carId:number;
  private car: Car;
  public person: Person;
  public email: string;
  public sub: Subscription;
  public shippings: Shipping[];
  public shipping: Shipping;

  states: State[];
  zipcodes: ZipCode[];
  constructor(private personService: PersonService, private route: ActivatedRoute, 
    private router: Router, public dialog: MdDialog, private tokenService:TokenService, 
    private carService: CarService) { }

  
  getUser(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
  }

  stateSelect(state) {
    console.log(state);
    if(state.name !== undefined) {
      this.personService.getZipCodes(state.name).then(res => {
        this.zipcodes = res.json();
        console.log(this.zipcodes);
      });
    }
   // console.log("here"); 
  }
    
  ngOnInit() {
    this.getUser(this.tokenService.getSubject());
    this.personService.getStates().then(res => {
      this.states = res.json();
    })
    
    this.personService.getShippings(this.tokenService.getSubject()).then(res => {
      this.shippings = res.json();
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newShippingAddr = new Shipping(value.firstName, value.lastName, value.street, value.city, 
      new State(value.state.id, value.state.name), this.person);
      console.log(newShippingAddr.id);
    this.shpData.emit(newShippingAddr);

      /*
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
    
    });
        */

  }

  onSubmit2(form: NgForm) {
    const value = form.value;
    this.personService.getShipping(value.id).then(res => {
      this.shipping = res.json();
    })
    this.shpData.emit(this.shipping);
  }

}
