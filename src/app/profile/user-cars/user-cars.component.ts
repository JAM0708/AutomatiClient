import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Car } from '../../model/car.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-user-cars',
  templateUrl: './user-cars.component.html',
  styleUrls: ['./user-cars.component.css']
})
export class UserCarsComponent implements OnInit {

  public cars: Car[];
  
    constructor(private personService: PersonService, private tokenService:TokenService) { 
    }
    
    getCars(email: string) {
      this.personService.getCars(email).then(res => {
        this.cars = res.json();
      })
    }
    ngOnInit() {
      this.getCars(this.tokenService.getSubject());
    }

}
