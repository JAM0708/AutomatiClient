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
    if(res.json().isJWT == true) {
      this.tokenService.setJwtInfo(res.json().jwt);
      this.router.navigate(['../home'], {relativeTo: this.route});
    } else {
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '40%',
        height: '20%',
        position: { top: '10%', left: '25%', right: '25%', bottom: '50%' },
          data: { name: email,  action: "login" }
        });
    }
   });     
  }
}
