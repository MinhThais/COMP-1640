import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{

  createForm!: FormGroup
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  selectFaculty : string ='Faculty';

  constructor(
    private fb: FormBuilder,
    private auth: UserService){

  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
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

// f : any = "";

  onSelectFaculty(event:any):void{
    this.selectFaculty = event.target.value;
  };

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onCreate(){
    console.log(this.selectFaculty);
    if(this.createForm.valid){
        this.auth.createUser(this.createForm).subscribe(
        (res)=>{
          console.log("success")
        },
        (err) =>{
          console.log("err")
        }
      );
    }
    else{
      Object.keys(this.createForm.controls).forEach((field) => {
        const control = this.createForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } 
      });
    }
  }


  facultyValidator(): ValidatorFn {
    return (control: any): { [key: string]: any } | null => {

      if (control.value == "") {
        return { faculty: true };
      }
      return null;
    };
  }

  
  
}
