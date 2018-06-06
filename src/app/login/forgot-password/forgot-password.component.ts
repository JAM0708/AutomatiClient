import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { PersonService } from '../../services/person.service';
import { NgForm } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['../../../css/style.css']
})
export class ForgotPasswordComponent implements OnInit {


  @ViewChild('f') slForm: NgForm;
  constructor(private personService: PersonService, public dialog: MdDialog,   private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {


  }

  onSubmit(form: NgForm) {
    const values = form.value;
    const email = values.email;

    this.personService.forgotPassword(email).then(res =>{
      if(res.json().passed) {
        this.showDialog(email, "Email Sent Successfully!");
          this.router.navigate(['/login'], {relativeTo: this.route});
      }
      else {
        this.showDialog(email, "Email Invalid or email doesnt exist in database");
      }
    });

  }

  showDialog(namee: string, actionn: string) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '40%',
      height: '20%',
      position: { top: '10%', left: '25%', right: '25%', bottom: '50%' },
        data: { name: namee,  action: actionn }
      });
  }

}
