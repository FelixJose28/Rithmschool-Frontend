import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userId?: any;
  contactForm = this.fb.group({
    id:[''],
    name:[''],
    lastName:[''],
    email: [''],
    password: [''],
    roleId:2
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.authService.getCurrentUser()
      .then((userResponse)=>{
        this.userId = userResponse?.userId
      })
        .then(()=>{
          this.contactForm.patchValue({
            id:this.userId
          })
        })

}

  ngOnInit(): void {
  }
  authUpdate() {
    const user = this.contactForm.value;
    this.authService.update(user).subscribe({
      next:(x)=>console.log(x),
      error:(x)=>console.log(x)
    })
    console.log(user);
  }

}
