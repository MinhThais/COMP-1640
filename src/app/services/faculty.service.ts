import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private baseUrl: string = 'https://localhost:7195/faculty/'
  constructor(private http: HttpClient) { }

  updateFaculty(faculty: any){
    return this.http.post<any>(this.baseUrl+'update-faculty', faculty)
  }
}
