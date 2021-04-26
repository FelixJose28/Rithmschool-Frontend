import { Course } from './../../../models/Course';
import { CourseService } from './../../../services/course.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Buy } from 'src/app/models/Buy';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BuyService } from 'src/app/services/buy.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  userId:any;
  courseId:any;
  buyCourseEntity?: Buy;
  courseData?: Course;

  contactForm = this.fb.group({
    userId: [''],
    courseId: ['']
  })

  constructor(
    private authenticationService:AuthenticationService,
    private buyService: BuyService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private courseService:CourseService
  ){

  authenticationService.getCurrentUser().then((currentUser)=>{
    this.userId = currentUser?.userId;
  });

  this.courseId = this.route.snapshot.paramMap.get('id');

  this.courseService.getCourse(this.courseId).subscribe({
    next:(courseResponse)=>{
      this.courseData = courseResponse;
      console.log(this.courseData)
      }
    })
  }

  ngOnInit(): void {
  }

  buyCourse(){
    let buyEntity = {
      buyId: 0,
      userId: this.userId,
      courseId: this.courseId
    }
    console.log(buyEntity)
    this.buyService.buyCourse(buyEntity).subscribe({
      next:(x)=>console.log(x),
      error:(x)=>console.log(x)
    })
  }

  goBack(){
    this.location.back();
  }

}
