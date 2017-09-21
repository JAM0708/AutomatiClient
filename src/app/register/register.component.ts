import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') slForm: NgForm;

  // inject the user service
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.firstName, value.lastName, value.email, value.address, value.city, value.state, value.zipcode, value.password);
    this.userService.addUser(newUser);
  
    this.router.navigate(['../login'], {relativeTo: this.route});
  }
}
