import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //public email: string; 
  public user: User;

  constructor(private userService: UserService, private tokenService:TokenService) { 
  }

  getUser(email: string) {
    this.userService.getUser(email).then(res => {
      this.user = res.json();
    });
    
  }

  ngOnInit() {
    this.getUser(this.tokenService.getSubject());
  }

}
