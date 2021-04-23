import { AuthenticationService } from './../../../services/authentication.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  contactForm = this.fb.group({
    name:[''],
    lastName:[''],
    email: [''],
    password: [''],
    roleId:2
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  authRegister() {
    const user = this.contactForm.value;
    this.auth.signIn(user).then((x)=>console.log(x))
    console.log(user);
  }

}
