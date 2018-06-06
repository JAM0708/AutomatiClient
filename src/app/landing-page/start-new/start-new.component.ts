import { Model } from './../../model/model.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarService } from "../../services/car.service";
import { UtilsService } from '../../services/utils.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-start-new',
  templateUrl: './start-new.component.html',
  styleUrls: ['../../../css/style.css']
})
export class StartNewComponent implements OnInit {

  
  models: Model[];
  isLoggedIn: boolean;
  constructor(private cookieService: CookieService, private carService: CarService, private router: Router, private route: ActivatedRoute,private utilsService: UtilsService) { }

  ngOnInit() {
    this.carService.getModels().then(res => {
      this.models = res.json();
    });
    //this.utilsService.setHomeState();
    if(this.cookieService.get('isLoggedIn') == 'true') {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  getModel(model: string) {
    this.router.navigate(["/customize", {name: model}], {relativeTo: this.route});
  }

}
