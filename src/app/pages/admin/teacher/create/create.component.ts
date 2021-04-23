import { TeacherService } from './../../../../services/teacher.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  contactForm = this.fb.group({
    Name: [''],
    LastName: [''],
    Email: [''],
    Skills: ['']
  })

  constructor(
    private fb: FormBuilder,
    private teacher: TeacherService) { }

  ngOnInit(): void {
  }
  createTeacher(){
    const teacher = this.contactForm.value;
    console.log(teacher)
    this.teacher.createTeacher(teacher).subscribe({
      next: (x)=>console.log(x),
      error: (err)=>console.log(err)
    });
  }

}
