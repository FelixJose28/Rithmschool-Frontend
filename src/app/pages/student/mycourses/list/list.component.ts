import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Buy } from './../../../../models/Buy';
import { BuyService } from './../../../../services/buy.service';
import { AuthenticationService } from './../../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  myCoursesBuy: Buy[]=[]

  constructor(
    private buyService:BuyService,
    private location:Location
  ){
    this.buyService.getBuys().subscribe({
      next:(mycourseResponse)=>{

        this.myCoursesBuy = mycourseResponse;
        console.log(this.myCoursesBuy )
      },
      error:(x)=>console.log(x)
    })

  }


  ngOnInit(): void {
  }
  goBack(){
    this.location.back()
  }
}
