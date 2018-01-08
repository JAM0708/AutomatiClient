import { ZipCode } from './../model/zipcode.model';

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ConstVariables } from '../app.const';
import { Role } from "../model/role.model";
import { State } from "../model/state.model";
import {MdDialog} from '@angular/material';
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { Person } from '../model/person.model';
import { PersonService } from '../services/person.service';

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
  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute, public dialog: MdDialog) { }

  ngOnInit() {
    this.personService.getStates().then(res => {
      this.states = res.json();
    })
  }

  stateSelect(state) {
    console.log(state);
    if(state.name !== undefined) {
      this.personService.getZipCodes(state.name).then(res => {
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
    const newPerson = new Person(value.firstName, value.lastName, value.email, value.street, value.city, value.password, new State(value.state.id, value.state.name), new Role(1, ConstVariables.DEFAULT_ROLE));
    newPerson.balance = 0;
    this.personService.addPerson(newPerson).then(res => {
      if(res.json().passed) {
        this.router.navigate(['../login'], {relativeTo: this.route});
      } else {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '40%',
          height: '40%',
          position: { top: '0px', left: '25%', right: '25%', bottom: '50%' },
          data: { name: newPerson.firstName,  action: "register" }
        });
      }
    });
  }
}
