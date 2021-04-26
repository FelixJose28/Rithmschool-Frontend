import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {


  teachers: Teacher[] = [];
  constructor(
    private teacherService: TeacherService
  ) {}

  ngOnInit(): void {
    this.getAllTareas();
  }
  private getAllTareas(){
    this.teacherService.getAllTeacher().subscribe({
      next: (teacherResponse)=> {
        this.teachers = teacherResponse
        console.log(this.teachers)
      },
      error: (x)=>console.log(x)
    })
  }


}
