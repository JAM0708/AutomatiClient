import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../../../../../services/user.service';
import { MdDialog } from '@angular/material';
import { TokenService } from '../../../../../services/token.service';
import { CarService } from '../../../../../services/car.service';
import { Car } from '../../../../../model/car.model';
import { User } from '../../../../../model/user.model';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css']
})
export class BuyCarComponent implements OnInit {
  private carId:number;
  private car:Car;
  private user: User;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, public dialog: MdDialog, private tokenService:TokenService, private carService: CarService) { }
  
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
  }

  confirmOrder() {
    //const newUser = new User(this.user.firstName, this.user.lastName,this.user.email, this.user.street, this.user.city, this.user.password, new State(value.state.id, value.state.name), new Role(1, ConstVariables.DEFAULT_ROLE), this.user.id); 
    const updateCar = new Car(this.car.price, this.car.year, this.car.color, this.car.condition, this.car.epa, this.car.lease, this.car.model, this.user, this.car.transmission, this.car.title, this.car.mileage); 
    this.carService.updateCar(updateCar).then(res => {
      // if(res.json().passed) {
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
