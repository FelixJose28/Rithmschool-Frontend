import { Location } from '@angular/common';
import { CourseService } from './../../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  selectedFile: File | null = null;
  userId?: number = 0;
  tareaId?: any  = 0;
  teachers: any = [];
  fueEntregada?:boolean = false;
  date= new Date().toISOString().substring(0,10);


  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private teacherService: TeacherService,
    private courseTarea: CourseService,
    private fb: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.teacherService.getAllTeacher().subscribe({
      next: (x)=>this.teachers = x,
      error: (x)=>console.log(x)
    })
    this.tareaId = this.activatedRoute.snapshot.paramMap.get('id');

    authService.getCurrentUser().then((result) => {
      console.log(result);
      this.userId = result?.userId;

      console.log(this.tareaId);
      console.log(this.userId);
      console.log(this.date);
    }
  )}

  contactForm = this.fb.group({
    courseId: 0,
    file: [''],
    duration: [''],
    price: [''],
    teacherId: ['']
  });

  ngOnInit(): void {
  }
  goBack(){
    this.location.back();
  }
  onFileSelected($event: any) {
    this.selectedFile = $event.target.files[0] as File;
    this.contactForm.patchValue({
      file: $event.target.files[0]
    });
  }


  updateCourse() {
    this.courseTarea.update(this.contactForm).subscribe({
      next: (res) =>{
          console.log(res)
        },
      error: (err) =>{
        console.error(err);
      }
    });

  }
}
