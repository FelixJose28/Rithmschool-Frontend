import { Location } from '@angular/common';
import { CourseService } from './../../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  courseDetail?: Course;
  courseId?:any;
  constructor(
    private courseService: CourseService,
    private activatedroute:ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.courseId = this.activatedroute.snapshot.paramMap.get("id");
    this.courseService.getCourse(this.courseId).subscribe({
      next:(courseResponse)=>{
        this.courseDetail = courseResponse;
      },
      error:(x)=>console.log(x)
    })
  }
  goBack():void{
    this.location.back();
  }
}
