import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Car } from '../../model/car.model';
import { PersonService } from '../../services/person.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['../../../css/style.css']
})
export class UserCarsComponent implements OnInit {

  public cars: Car[];
  
    constructor(private personService: PersonService, private tokenService:TokenService,private cookieService: CookieService) { 
    }
    
    getCars(email: string) {
      this.personService.getCars(email).then(res => {
        this.cars = res.json();
      })
    }
    ngOnInit() {
      this.getCars(this.cookieService.get('email'));
    }

}
