import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from "../../../../services/car.service";
import { Car } from "../../../../model/car.model";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  private carId: number;
  private car: Car;
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => { 
          this.carId = params['id'];
          this.carService.getCar(this.carId).then(res => {
            this.car = res.json();
          });
        }
      );
  }

}
