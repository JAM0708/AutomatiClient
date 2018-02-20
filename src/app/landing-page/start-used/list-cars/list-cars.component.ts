import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../model/car.model';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['../../../../css/style.css']
})
export class ListCarsComponent implements OnInit {

  modelName: string;
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute, private utilsService: UtilsService) { }

  cars: Car[];

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.modelName = params['name'];
        this.carService.getCarsByModel(this.modelName).then(res => {
          this.cars = res.json();
          console.log(this.cars);
        })
      }
      );
      this.utilsService.setHomeState();
  }

  viewDetails(car: number) {
    this.router.navigate(['/carDetails', { id: car, name: this.modelName}], {relativeTo: this.route});
  }

}
