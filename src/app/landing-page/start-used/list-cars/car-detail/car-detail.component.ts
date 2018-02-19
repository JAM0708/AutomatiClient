import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from "../../../../services/car.service";
import { Car } from "../../../../model/car.model";
import { Review } from '../../../../model/review.model';
import { ReviewService } from '../../../../services/review.service';
import { UtilsService } from '../../../../services/utils.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['../../../../../css/style.css']
})
export class CarDetailComponent implements OnInit {

  private carId: number;
  private car: Car;
  private reviews: Review[];
  private modelName: string;
  constructor(private reviewService: ReviewService, private carService: CarService, private router: Router, private route: ActivatedRoute, private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.setHomeState();
    this.route.params
      .subscribe(
        (params: Params) => { 
          this.carId = params['id'];
          this.modelName = params['name'];
          this.carService.getCar(this.carId).then(res => {
            this.car = res.json();
          });

        }
      );
      
      this.reviewService.getReviewsByModel(this.modelName).then(res => {
        this.reviews = res.json();
        console.log(res.json());
      });
      
    }

  
  buyCar() {
    this.router.navigate(['/buyCar', { carId: this.carId }], {relativeTo: this.route});    
  }

}
