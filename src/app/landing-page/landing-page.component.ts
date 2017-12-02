import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../../css/style.css']
})
export class LandingPageComponent implements OnInit {
  
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.setHomeState();
  }

}
