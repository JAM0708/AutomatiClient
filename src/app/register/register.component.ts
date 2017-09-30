import { ZipCode } from './../model/zipcode.model';

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../model/user.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ConstVariables } from '../app.const';
import { Role } from "../model/role.model";
import { State } from "../model/state.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  states: State[];
  zipcodes: ZipCode[];
  // inject the user service
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getStates().then(res => {
      this.states = res.json();
    })
  }

  stateSelect(state) {
    if(state.name !== undefined) {
      this.userService.getZipCodes(state.name).then(res => {
        this.zipcodes = res.json();
      });
    } 
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.firstName, value.lastName, value.email, value.street, value.city, value.password, new State(value.state.id, value.state.name), new Role(1, ConstVariables.DEFAULT_ROLE));
    this.userService.addUser(newUser);
  
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
}
