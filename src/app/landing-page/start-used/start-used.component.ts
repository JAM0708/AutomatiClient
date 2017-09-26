import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CarService } from '../../services/car.service';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-start-used',
  templateUrl: './start-used.component.html',
  styleUrls: ['./start-used.component.css']
})
export class StartUsedComponent implements OnInit {

  public model: string;
  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  getModel(model: string) {
    this.model = model;
  }
}
