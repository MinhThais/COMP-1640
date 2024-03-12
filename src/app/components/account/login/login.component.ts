import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  sendEmailForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: APIService,
    private router: Router,
    private auth: UserService,
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  onLogin(){
    console.log(this.loginForm.valid)
    if(this.loginForm.valid){
        this.auth.createUser(this.loginForm).subscribe(
        (res)=>{
          console.log("success")
        },
        (err) =>{
          console.log("err")
        }
      );
    }
    else{
      Object.keys(this.loginForm.controls).forEach((field) => {
        const control = this.loginForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } 
      });
    }
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
}
