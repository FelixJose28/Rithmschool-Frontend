import { Teacher } from './../../../../models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  teacherId?:any;
  teacher?:Teacher;
  constructor(
    private activatedroute:ActivatedRoute,
    private teacherService: TeacherService,
    private location: Location) { }



  ngOnInit(): void {
    this.teacherId = this.activatedroute.snapshot.paramMap.get("id");
    console.log(this.teacherId)
    this.teacherService.getTeacher(this.teacherId).subscribe({
      next: (teacherResponse)=>{
        this.teacher = teacherResponse;
        console.log(this.teacher)
      },
      error: (x)=>{
        console.log(x)
      }
    })
  }
  goBack():void{
    this.location.back();
  }

}
