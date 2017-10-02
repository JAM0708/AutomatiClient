import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { UserService } from "../services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   @ViewChild('f') slForm: NgForm;
   decide: string;
   

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
   const values = form.value;
   const email = values.email;
   const password = values.password;
    let token = this.userService.login(email, password);
    this.decide = localStorage.getItem('decide');
   // console.log(this.decide);
    if(this.decide === 'No User Found') {
      this.router.navigate(['/login'], {relativeTo: this.route});
    }
    else {
      this.router.navigate(['../profile'], {relativeTo: this.route});      
    }
    /*
    if(token != null) {
          this.router.navigate(['../profile'], {relativeTo: this.route});
    }
    else {
        this.router.navigate(['/login'], {relativeTo: this.route});
    }
    */
      
  }
}
