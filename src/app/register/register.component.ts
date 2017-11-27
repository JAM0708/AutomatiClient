import { ZipCode } from './../model/zipcode.model';

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ConstVariables } from '../app.const';
import { Role } from "../model/role.model";
import { State } from "../model/state.model";
import {MdDialog} from '@angular/material';
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../css/style.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  states: State[];
  zipcodes: ZipCode[];
  // inject the user service
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, public dialog: MdDialog) { }

  ngOnInit() {
    this.userService.getStates().then(res => {
      this.states = res.json();
    })
  }

  stateSelect(state) {
    console.log(state);
    if(state.name !== undefined) {
      this.userService.getZipCodes(state.name).then(res => {
        this.zipcodes = res.json();
        console.log(this.zipcodes);
      });
    }
    console.log("here"); 
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value.state);
    console.log(value.zipcode);
    const newUser = new User(value.firstName, value.lastName, value.email, value.street, value.city, value.password, new State(value.state.id, value.state.name), new Role(1, ConstVariables.DEFAULT_ROLE));
    this.userService.addUser(newUser).then(res => {
      if(res.json().passed) {
        this.router.navigate(['../login'], {relativeTo: this.route});
      } else {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '40%',
          height: '40%',
          position: { top: '0px', left: '25%', right: '25%', bottom: '50%' },
          data: { name: newUser.firstName,  action: "register" }
        });
      }
    });
  }
}
