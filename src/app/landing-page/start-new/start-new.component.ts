import { Model } from './../../model/model.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from "../../services/car.service";
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-start-new',
  templateUrl: './start-new.component.html',
  styleUrls: ['../../../css/style.css']
})
export class StartNewComponent implements OnInit {

  
  private models: Model[];
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute,private utilsService: UtilsService) { }

  ngOnInit() {
    this.carService.getModels().then(res => {
      this.models = res.json();
    });
    this.utilsService.setHomeState();
  }

  getModel(model: string) {
    this.router.navigate(["/customize", {name: model}], {relativeTo: this.route});
  }

}
