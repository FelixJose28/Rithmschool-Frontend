import { Location } from '@angular/common';
import { User } from 'src/app/models/User';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private userId?: any;
  user?: User;
  constructor(
    private authenticationService:AuthenticationService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.authenticationService.getCurrentUser().then((x)=>
      {

        this.userId = x?.userId;
        console.log(this.userId)
      }).then(()=>{
          this.authenticationService.getUserById(this.userId).subscribe({
            next:(userResponse)=>{
              this.user = userResponse
            },
            error:(x)=>console.log(x)
          })

      })

    }
    goBack(){
      this.location.back();
    }
}
