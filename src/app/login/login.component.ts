import { MdDialog } from '@angular/material';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { TokenService } from "../services/token.service";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   @ViewChild('f') slForm: NgForm;
   decide: string;
   

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private tokenService: TokenService, public dialog: MdDialog) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
   const values = form.value;
   const email = values.email;
   const password = values.password;

   this.userService.login(email, password).then(res => {
    this.tokenService.setJwtInfo(res.json().jwt);
    if(this.tokenService.getJwt() != "No User Found") {
      this.router.navigate(['../home'], {relativeTo: this.route});
    } else {
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
          width: '40%',
          height: '40%',
          data: { name: email,  action: "login" }
        });
    }
   });     
  }
}
