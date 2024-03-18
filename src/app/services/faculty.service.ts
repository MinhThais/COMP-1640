import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private baseUrl: string = 'https://localhost:7195/api/Faculties/';
  constructor(private http: HttpClient) { }

  getAllFaculty() : Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  getFacultyID(facultyName:string) : Observable<any>{
    return this.http.get<any>(this.baseUrl + 'faculty_name', {params : {facultyName}});
  }

  updateFaculty(faculty: any){
    return this.http.post<any>(this.baseUrl+'update-faculty', faculty)
  }


}
