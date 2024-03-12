// import { Injectable } from '@angular/core';

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:7195/api/Users/';

  constructor(private http: HttpClient) {}

  createUser( user:any) {
    return this.http.post<any>(this.baseUrl+'Register', user)
    // console.log('hello');
  }
}
