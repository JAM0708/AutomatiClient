import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { State } from '../../model/state.model';
import { ZipCode } from '../../model/zipcode.model';
import { NgForm } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { ConstVariables } from '../../app.const';
import { Role } from '../../model/role.model';
import { TokenService } from '../../services/token.service';
import { PersonService } from '../../services/person.service';
import { Person } from '../../model/person.model';
import { UtilsService } from '../../services/utils.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['../../../css/style.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;
  
  public person: Person;
  public email: string;
  states: State[];
  zipcodes: ZipCode[];
  constructor(private cookieService: CookieService, private utilsService: UtilsService, private personService: PersonService, private route: ActivatedRoute, private router: Router, public dialog: MdDialog, private tokenService:TokenService) { }

  
  getUser(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
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
    
  ngOnInit() {
    this.utilsService.setHomeState();
    this.getUser(this.cookieService.get('email'));
    this.personService.getStates().then(res => {
      this.states = res.json();
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    console.log(value.state);
    console.log(value.zipcode);
    const newPerson = new Person(value.firstName, value.lastName, value.email, value.street, value.city, value.password, new State(value.state.id, value.state.name), new Role(1, ConstVariables.DEFAULT_ROLE), this.person.id);
    console.log(this.person);
    this.personService.updatePerson(newPerson).then(res => {
     // if(res.json().passed) {
        this.router.navigate(['../profile'], {relativeTo: this.route});
      //} 
      /*
      else {
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '40%',
          height: '40%',
          position: { top: '0px', left: '25%', right: '25%', bottom: '50%' },
          data: { name: newUser.firstName,  action: "register" }
        }
      );
     }
    */
    console.log(res);
    });
  }

}
