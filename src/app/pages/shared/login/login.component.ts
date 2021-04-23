import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  contactForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService) { }

  ngOnInit(): void {
  }


  authLogin() {
    const user = this.contactForm.value;
    this.auth.signUp(user).subscribe({
      next: (x)=>{console.log(x,"asd")},
      error: (err)=>{console.log(err)}
    })
    console.log(user);
  }
}
