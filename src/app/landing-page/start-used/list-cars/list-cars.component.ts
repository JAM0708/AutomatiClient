import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../model/car.model';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit, OnChanges{
  @Input('modelName') modelName: string;
  
  constructor(private carService: CarService) { }

  cars: Car[];
  
  ngOnInit() {
    
  }

  ngOnChanges() {
    this.carService.getCarsByModel(this.modelName).then(res => {
      this.cars = res.json();
      //console.log(this.modelName);
      console.log(this.cars);
    })
  }

}
