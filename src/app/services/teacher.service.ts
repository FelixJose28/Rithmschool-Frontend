import { Teacher } from './../models/Teacher';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  private apiURL:string = "https://localhost:44344/api";


  createTeacher(teacher: Teacher): Observable<Teacher>{
    const fullURL = `${this.apiURL}/Teacher/PostTeacher`;
    return this.http.post<Teacher>(fullURL,teacher);
  }

  updateTeacher(teacher: Teacher): Observable<Teacher>{
    const fullURL = `${this.apiURL}/Teacher/UpdateCourse`;
    return this.http.put<Teacher>(fullURL,teacher);
  }
  deleteTeacher(id: number){
    const fullURL = `${this.apiURL}/Teacher/RemoveTeacher/${id}`;
    return this.http.delete<Teacher>(fullURL);
  }

  getTeacher(id: number){
    const fullURL = `${this.apiURL}/Teacher/GetTeacher/${id}`;
    return this.http.get<Teacher>(fullURL);
  }
  getAllTeacher(){
    const fullURL = `${this.apiURL}/Teacher/GetTeachers`;
    return this.http.get<Teacher>(fullURL);
  }
}
