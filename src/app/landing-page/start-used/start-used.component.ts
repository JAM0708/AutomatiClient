import { Model } from './../../model/model.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CarService } from '../../services/car.service';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-start-used',
  templateUrl: './start-used.component.html',
  styleUrls: ['../../../css/style.css']
})
export class StartUsedComponent implements OnInit {

  public model: string;
  public models: Model[];
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carService.getModels().then(res => {
      this.models = res.json();
    })
  }

  getModel(model: string) {
    this.model = model;
    console.log(model);
    this.router.navigate(["list", {name: model}], {relativeTo: this.route});
  }
}
