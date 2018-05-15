import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { CarService } from '../../services/car.service';
import { ReviewService } from '../../services/review.service';
import { Person } from '../../model/person.model';
import { Car } from '../../model/car.model';
import { PersonService } from '../../services/person.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Review } from '../../model/review.model';
import { NgForm } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  @ViewChild('f') ngForm: NgForm;
  person: Person;
  cars: Car[];
  email: string;
  reviews: Review[];
  carr: Car;

  constructor(private personService: PersonService, 
    private tokenService: TokenService, private carService: CarService,
     private reviewService: ReviewService, private router: Router, private route: ActivatedRoute, private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.setHomeState();
    this.route.params
    .subscribe(
    (params: Params) => {
      this.email = params['email'];
    }
    );
    this.carService.getCarsByPerson(this.email).then(res => {
      this.cars = res.json();
    });

    this.reviewService.getReviewsByPerson(this.email).then(res => {
      this.reviews = res.json();
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newReview = new Review(value.title, value.rating, 
      value.car, null, value.description, value.car.person, value.car.model);
      console.log(newReview);

    this.reviewService.addReview(newReview);
    this.router.navigate(["/profile"], {relativeTo: this.route});
  }

  carSelected(car: Car) {
    this.carr = car;
    console.log(this.carr.id);
    console.log(this.carr.model.imgSrc);
  }
}
