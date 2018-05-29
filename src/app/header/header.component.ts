import { UtilsService } from './../services/utils.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../css/style.css']
})
export class HeaderComponent implements OnInit {
  constructor(private utilsService: UtilsService, private cookieService:CookieService, private router: Router, private route: ActivatedRoute) { 
  }
  home: boolean;
  subscription: Subscription;



  ngOnInit() {
    this.subscription = this.utilsService.homeChanged.subscribe(
      (homeState: boolean) => {
        console.log(this.cookieService.get('homeState'));
        if(this.cookieService.get('homeState') == 'true') {
          this.home = true;
        }
        else {
          this.home = false;
        }
      }
    );
    console.log(this.cookieService.get('homeState'));
    if(this.cookieService.get('homeState') == 'true') {
      this.home = true;
    }
    else {
      this.home = false;
    }
  }

  logOut(){
    if(this.cookieService.get('isLoggedIn')) {
      this.cookieService.set('isLoggedIn', 'false');
    }
    if(this.cookieService.get('homeState') == 'true') {
      this.cookieService.set('homeState', 'false');
      this.home = false;
    }
    window.location.reload();
    this.router.navigate(["/home"], {relativeTo: this.route});
  }

  goHome() {
    this.router.navigate(["/home"], {relativeTo: this.route});
  }

}
