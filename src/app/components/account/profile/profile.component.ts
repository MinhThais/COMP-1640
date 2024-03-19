import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileForm!: FormGroup;
  imageUrl: string | ArrayBuffer = '';

  constructor(
    private fb: FormBuilder,
    private api: APIService,
    private router: Router,
    private auth: UserService
  ){}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      user_username:['', Validators.required],
      user_email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ],
      ],
      user_password: ['', Validators.required],
      user_confirmPassword: ['', Validators.required],
      user_birthday: ['', Validators.required],
      user_faculty: ['', Validators.required],
      user_gender: ['', Validators.required], 
      user_role: [''],
    })
  }

  onClick(){
    if(this.profileForm.valid){
        this.auth.createUser(this.profileForm).subscribe(
        (res)=>{
          console.log("success")
        },
        (err) =>{
          console.log("err")
        }
      );
    }
    else{
      Object.keys(this.profileForm.controls).forEach((field) => {
        const control = this.profileForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } 
      });
    }
  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
