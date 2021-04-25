import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  private apiUrl = "https://localhost:44344/api";
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  post(form: FormGroup): Observable<Course> {
    const formData = new FormData();
    const url = `${this.apiUrl}/Course/CreateCourse`;

    console.log(form.getRawValue());

    const headers = new HttpHeaders('multipart/form-data');

    // ! Bang operator to allow `null` exceptions to pop up
    formData.append('duration', form.get('duration')!.value);
    formData.append('price', form.get('price')!.value);
    formData.append('teacherId', form.get('teacherId')!.value);
    formData.append('file', form.get('file')!.value);

    return this.http.post<Course>(url, formData, { headers });
  }



  update(form: FormGroup): Observable<Course> {
    const formData = new FormData();
    const url = `${this.apiUrl}/Course/CreateCourse`;

    console.log(form.getRawValue());

    const headers = new HttpHeaders('multipart/form-data');

    // ! Bang operator to allow `null` exceptions to pop up
    formData.append('duration', form.get('duration')!.value);
    formData.append('price', form.get('price')!.value);
    formData.append('teacherId', form.get('teacherId')!.value);
    formData.append('file', form.get('file')!.value);

    return this.http.post<Course>(url, formData, { headers });
  }


  deleteCourse(id:number): Observable<Course>{
    const fullURL = `${this.apiUrl}/Course/RemoveCourse/${id}`;
    return this.http.delete<Course>(fullURL);
  }
  getAll():Observable<Course[]>{
    const fullURL = `${this.apiUrl}/Course/GetCourses`;
    return this.http.get<Course[]>(fullURL);
  }
  getCourse(id: number): Observable<Course>{
    const fullURL = `${this.apiUrl}/Course/GetCourse/${id}`;
    return this.http.get<Course>(fullURL);
  }
}
