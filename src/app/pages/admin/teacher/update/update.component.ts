import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

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

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  createTeacher(){
    const teacher = this.contactForm.value;
    console.log(teacher)
    this.teacherService.updateTeacher(teacher).subscribe({
      next: (x)=>console.log(x),
      error: (err)=>console.log(err)
    });
  }

}
