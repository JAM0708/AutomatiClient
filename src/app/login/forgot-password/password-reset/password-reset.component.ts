import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PersonService } from '../../../services/person.service';
import { ConfirmDialogComponent } from '../../../confirm-dialog/confirm-dialog.component';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  token: number;
  email: string;
  isValid: boolean = true;
  constructor(private router: Router, private route: ActivatedRoute, 
    private tokenService: TokenService, 
    public dialog: MdDialog,
    private personService: PersonService ){
  }
  ngOnInit(){
    this.route.queryParamMap.subscribe(paramMap => {
      this.token = paramMap['params']['token'];
      this.email = paramMap['params']['email'];
    });

    this.personService.findToken(this.email, this.token).then(res => {
      if(!res.json().passed) {
          this.showDialog(this.email, "invalid-token");
          this.router.navigate(['/login'], {relativeTo: this.route});
      }
    });
    
  }

  showDialog(named: string, actio: string) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '40%',
      height: '20%',
      position: { top: '10%', left: '25%', right: '25%', bottom: '50%' },
        data: { name: named,  action: actio }
      });
  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const password = values.password;
    const confirmPassword = values.confirmPassword;

    console.log(password);
    console.log(confirmPassword);
    if(password != confirmPassword){
        this.isValid = false; 
    } else {
      this.isValid = true;
      this.personService.updatePassword(this.email, password).then(res => {
        if(res.json().passed) {
          this.showDialog(this.email, "Password Reset Successfully");
          this.router.navigate(['/login'], {relativeTo: this.route});
        }
      });
    }

  }

}
