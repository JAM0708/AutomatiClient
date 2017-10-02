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

  constructor(private userService: UserService) { 
    //this.email = "moralesjoe12@hotmail.com";
    //this.getUser();
  }

  getUser(email: string) {
    this.userService.getUser(email).then(res => {
      this.user = res.json();
    });
    
  }

  ngOnInit() {
    this.getUser("moralesjoe12@hotmail.com");
  }

}
