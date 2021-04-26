import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

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
