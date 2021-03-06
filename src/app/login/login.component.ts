import { MdDialog } from '@angular/material';
import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { TokenService } from "../services/token.service";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { PersonService } from '../services/person.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../css/style.css']
})
export class LoginComponent implements OnInit {
   @ViewChild('f') slForm: NgForm;
   decide: string;
   

  constructor(private personService: PersonService, 
    private router: Router, private route: ActivatedRoute, 
    private tokenService: TokenService, 
    public dialog: MdDialog, 
    private cookieService: CookieService,
    private elementRef: ElementRef) { }

  ngOnInit() {
  }

  passwordReset() {
    this.router.navigate(['/forgotPassword'], {relativeTo: this.route});
  }

  onSubmit(form: NgForm) {
   const values = form.value;
   const email = values.email;
   const password = values.password;

   this.personService.login(email, password).then(res => {
    if(res.json().isJWT == true) {
      this.tokenService.setJwtInfo(res.json().jwt);
      this.cookieService.set('homeState', 'true');
      this.cookieService.set('email', email);
      this.router.navigate(['../home'], {relativeTo: this.route});
    } else {
      // let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      //   width: '40%',
      //   height: '20%',
      //   position: { top: '10%', left: '25%', right: '25%', bottom: '50%' },
      //     data: { name: email,  action: "login unsuccessfully" }
      //   });
        let errorDiv = this.elementRef.nativeElement.querySelector('.error');

        errorDiv.innerHTML = `<h4 style = "color:red">Invalid Credentials</h4>`;
    }
   });     
  }
}
