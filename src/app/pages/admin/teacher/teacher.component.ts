import { Teacher } from './../../../models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[] = [];
  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.getAllTeacher().subscribe({
      next: (teacherResponse)=> console.log(teacherResponse),
      error: (x)=>console.log(x)
    })
   }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.teacherService.getAllTeacher().subscribe({
      next: (teacherResponse)=> this.teachers = teacherResponse,
      error: (x)=>console.log(x)
    })
  }
  deleteTeacher(id: number){
    this.teacherService.deleteTeacher(id).subscribe({
      next: (x)=>
      {
          this.getAll();
          console.log(x)
      },
      error:(x)=>console.log(x)
    })
  }

}
