import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TokenService } from '../../services/token.service';
import { User } from '../../model/user.model';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['./user-cars.component.css']
})
export class UserCarsComponent implements OnInit {

  public cars: Car[];
  
    constructor(private userService: UserService, private tokenService:TokenService) { 
    }
    
    getCars(email: string) {
      this.userService.getCars(email).then(res => {
        this.cars = res.json();
      })
    }
    ngOnInit() {
      this.getCars(this.tokenService.getSubject());
    }

}
