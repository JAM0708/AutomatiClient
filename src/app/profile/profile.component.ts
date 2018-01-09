import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //public email: string; 
  public person: Person;

  constructor(private personService: PersonService, private tokenService:TokenService) { 
  }

  getUser(email: string) {
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    });
    
  }

  ngOnInit() {
    this.getUser(this.tokenService.getSubject());
  }

}
