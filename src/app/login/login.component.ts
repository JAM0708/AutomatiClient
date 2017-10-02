import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { TokenService } from "../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   @ViewChild('f') slForm: NgForm;
   decide: string;
   

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private tokenService: TokenService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
   const values = form.value;
   const email = values.email;
   const password = values.password;

   this.userService.login(email, password).then(res => {
    this.tokenService.setJwtInfo(res.json().jwt);
    console.log(this.tokenService.getJwt());
    if(this.tokenService.getJwt() != "No User Found") {
      this.router.navigate(['../home']);
    } else {

    }
   });     
  }
}
