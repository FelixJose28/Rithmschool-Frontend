import { Teacher } from './../../../models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

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
  deleteTeacher(id: number){
    Swal.fire({
      title: 'Do you want to delete this teacher?',
      showCancelButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'The teacher has been deleted', 'success');

        this.teacherService.deleteTeacher(id).subscribe({
          next: (x)=>{
            console.log(x)
            this.getAllTareas();},
          error:(x)=>console.log(x)
        })
        console.log('asdasd')
      } else if (result.isDenied) {

        Swal.fire("Teacher don't deleted", '', 'info')
      }
    })


  }

}
