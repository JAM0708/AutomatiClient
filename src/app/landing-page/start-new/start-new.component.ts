import { Model } from './../../model/model.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from "../../services/car.service";

@Component({
  selector: 'app-start-new',
  templateUrl: './start-new.component.html',
  styleUrls: ['./start-new.component.css']
})
export class StartNewComponent implements OnInit {

  
  private models: Model[];
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carService.getModels().then(res => {
      this.models = res.json();
    })
  }

  getModel(model: string) {
    this.router.navigate(["/customize", {name: model}], {relativeTo: this.route});
  }

}
