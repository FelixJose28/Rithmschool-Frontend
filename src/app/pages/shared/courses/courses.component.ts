import { CourseService } from './../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:Course[]=[];
  constructor(private courseService:CourseService) {
    courseService.getAll().subscribe({
      next:(coursesResponse)=>{
        this.courses = coursesResponse;
        console.log(this.courses)
      },
      error:(x)=>console.log(x)
    })
  }

  ngOnInit(): void {
  }

}
