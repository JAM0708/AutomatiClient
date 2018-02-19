import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../../../model/car.model';
import { CarService } from '../../../services/car.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Color } from '../../../model/color.model';
import { Transmission } from '../../../model/transmission.model';
import { Engine } from '../../../model/engine.model';
import { NgForm } from '@angular/forms';
import { Model } from '../../../model/model.model';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {
  @ViewChild('f') cForm: NgForm;
  modelName: string;
  private model: Model;
  private colors: Color[];
  private transmissions: Transmission[];
  private engines: Engine[];
  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute, private utilsService: UtilsService) { }

  

  ngOnInit() {
    this.utilsService.setHomeState();
    this.route.params
      .subscribe(
      (params: Params) => {
        this.modelName = params['name'];
      }
      );
      this.getColors();
      this.getTransmissions();
      this.getEngines();
      this.getModel();
  }

  getModel() {
    this.carService.getModel(this.modelName).then(res => {
      this.model = res.json();
    })
  }


  getColors() {
    this.carService.getColors().then(res => {
      this.colors = res.json();
    });
  }

  getTransmissions() {
    this.carService.getTransmissions().then(res => {
      this.transmissions = res.json();
    });
  }

  getEngines() {
    this.carService.getEngines().then(res => {
      this.engines = res.json();
    });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value.color.name);
    console.log(value.engine);
    console.log(value.transmission.id);
    this.router.navigate(["/checkout", {name: this.modelName ,color: value.color.name, engine: value.engine.id, transmission: value.transmission.id}],
     {relativeTo: this.route});
  }
}
