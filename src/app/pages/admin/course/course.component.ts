import { CourseService } from './../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[] = []
  constructor(
    private courseService: CourseService
    ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }
  deleteCourse(id: number){
    Swal.fire({
      title: 'Do you want to delete this course?',
      showCancelButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'The course has been deleted', 'success');

        this.courseService.deleteCourse(id).subscribe({
          next: (x)=>{
            console.log(x)
            this.getAllCourses();},
          error:(x)=>console.log(x)
        })
      } else if (result.isDenied) {

        Swal.fire("Course don't deleted", '', 'info')
      }
    })


  }
  getAllCourses(){
    this.courseService.getAll().subscribe({
      next: (coursesResponse)=>{
        this.courses = coursesResponse;
        console.log(this.courses)
      },
      error:(x)=>console.log(x)
    })
  }

}
