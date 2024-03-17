import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl: string = 'https://localhost:7195/contribution/';

  constructor(private http:HttpClient) { }

  // addNewArticle(file:File, contribution_title: string){
  //   const formData = new FormData()
  //   formData.append("file", file, file.name)
  //   return this.http.post(this.baseUrl+"Add-New-Article", formData, {params: {contribution_title}})
  // }

  addNewArticle(formdata:any){
    return this.http.post(this.baseUrl+"Add-New-Article", formdata);
  }

  uploadImage(file:any){
    return this.http.post<any>(`${this.baseUrl}uploadFile`, file);
  }
}
