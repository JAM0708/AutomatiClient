import { UtilsService } from './../services/utils.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../css/style.css']
})
export class HeaderComponent implements OnInit {
  constructor(private utilsService: UtilsService) { 
  }
  home: boolean;
  subscription: Subscription;



  ngOnInit() {
    this.subscription = this.utilsService.homeChanged.subscribe(
      (homeState: boolean) => {
        this.home = homeState;
      }
    )
  }

}
