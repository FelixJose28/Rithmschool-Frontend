import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import {Teacher} from '../../../../models/Teacher'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  contactForm = this.fb.group({
    Name: [''],
    LastName: [''],
    Email: [''],
    Skills: ['']
  })
  teacherCurrenData?: Teacher;
  teacherNew?:Teacher;
  teacherId: any = this.activatedroute.snapshot.paramMap.get("id");;

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private activatedroute:ActivatedRoute,
    private location: Location) { }


  ngOnInit(): void {
    this.getTeacher();
  }
  getTeacher(){
    this.teacherId = this.activatedroute.snapshot.paramMap.get("id");
    this.teacherService.getTeacher(this.teacherId).subscribe({
      next: (teacherResponse)=>{
        this.teacherCurrenData = teacherResponse;
      },
      error:(x)=>console.log(x)
    })
  }
  goBack(): void{
    this.location.back();
    console.log(this.teacherId)
  }
  updateTeacher(){
    const teacher = this.contactForm.value;
    console.log(teacher)
    this.teacherService.updateTeacher(teacher).subscribe({
      next:(x)=>{
        console.log(x)
      },
      error:(x)=>{
        console.log(x)
      }
    })
  // this.teacherService.updateTeacher(teacher).subscribe({
  //   next: (teacherIdResponse)=>
  //     {
  //       this.teacherService.getTeacher(2)
  //     console.log(this.teacherId)

  //   },
  //   error: (err)=>console.log(err)
  // });
  }

}
