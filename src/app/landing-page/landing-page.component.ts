import { UtilsService } from './../services/utils.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['../../css/style.css']
  //styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('con') con: ElementRef;

  public hover: number;
  
  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.setHomeState();
  }

 

  onEnter(value: string) {
    if(value === 'left') {
      this.con.nativeElement.classList.add('hover-left');
    }
    else {
      this.con.nativeElement.classList.add('hover-right');
    }
  }

  onLeave(value: string) {
    if(value === 'left') {
      this.con.nativeElement.classList.remove('hover-left');
    }
    else {
      this.con.nativeElement.classList.remove('hover-right');
    }
  }
}
