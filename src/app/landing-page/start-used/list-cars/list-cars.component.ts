import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../model/car.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {

  
  constructor(private carService: CarService) { }

  cars: Car[];

  

  ngOnInit() {
    this.carService.getCars().then(res => {
      this.cars = res.json();
      console.log(this.cars);
    })
  }

}
