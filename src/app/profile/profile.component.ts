import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person.model';
import { PersonService } from '../services/person.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from '../services/utils.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //public email: string; 
  public person: Person;

  constructor(private utilsService: UtilsService, private route: ActivatedRoute, private personService: PersonService, private router: Router, private tokenService:TokenService) { 
  }

  getUser(email: string) {
    this.utilsService.setHomeState();
    this.personService.getPerson(email).then(res => {
      this.person = res.json();
    }); 
  }

  payBalance() {
    
  }

  editProfile() {
    this.router.navigate(["/editProfile", {email: this.person.email}], {relativeTo: this.route});
  }
  
  goToReviews() {
    this.router.navigate(["/addReview", {email: this.person.email}], {relativeTo: this.route});
  }
  ngOnInit() {
    this.getUser(this.tokenService.getSubject());
  }

}
