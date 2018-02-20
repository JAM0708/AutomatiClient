import { Subject } from 'rxjs/Subject';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable() 

export class UtilsService {
    homeChanged = new Subject<boolean>();
    private homeState = false;

    constructor(private cookieService:CookieService) { 
    }
    setHomeState() {
        if(this.cookieService.get('homeState') === 'true') {
            this.homeState = true;
            this.homeChanged.next(this.homeState);
        }
    }
}