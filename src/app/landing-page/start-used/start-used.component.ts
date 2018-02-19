import { Model } from './../../model/model.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../model/car.model';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-start-used',
  templateUrl: './start-used.component.html',
  styleUrls: ['../../../css/style.css']
})
export class StartUsedComponent implements OnInit {

  public model: string;
  public models: Model[];
  constructor(private carService: CarService, private utilsService: UtilsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carService.getModels().then(res => {
      this.models = res.json();
    });
    this.utilsService.setHomeState();
  }

  getModel(model: string) {
    this.model = model;
    console.log(model);
    this.router.navigate(["/listOfModels", {name: model}], {relativeTo: this.route});
  }
}
