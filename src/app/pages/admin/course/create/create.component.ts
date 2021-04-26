import { TeacherService } from 'src/app/services/teacher.service';
import { Location } from '@angular/common';
import { CourseService } from './../../../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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


  createCourse() {
    this.courseTarea.post(this.contactForm).subscribe({
      next: (res) =>{
          this.router.navigate(['/pasante/tareas/tareasentregadas']);
          console.log(res)
        },
      error: (err) =>{
        console.error(err);
      }
    });

  }
}
