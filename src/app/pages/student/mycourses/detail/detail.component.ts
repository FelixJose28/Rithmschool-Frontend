import { Location } from '@angular/common';
import { CourseService } from './../../../../services/course.service';
import { Course } from './../../../../models/Course';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  courseId:any;
  myCourse?: Course;

  constructor(
    private courseService:CourseService,
    private route: ActivatedRoute,
    private location:Location
  ){

  }

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get("id");
    console.log(this.courseId)
    console.log(this.courseId)
    console.log(this.courseId)
    console.log(this.courseId)
    this.courseService.getCourse(this.courseId).subscribe({
      next:(courseData)=>{
        this.myCourse = courseData
        console.log(courseData)
      },
      error:(x)=>console.log(x)
    })
  }
  goBack(){
    this.location.back()
  }

}
