import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent {
  addFacultyForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: UserService
    ){
  }

  ngOnInit(): void {
    this.addFacultyForm = this.fb.group({
      faculty_name:['', Validators.required]
    })
  }

  onCreate(){
    if(this.addFacultyForm.valid){
        this.auth.createUser(this.addFacultyForm).subscribe(
        (res)=>{
          console.log("success")
        },
        (err) =>{
          console.log("err")
        }
      );
    }
    else{
      Object.keys(this.addFacultyForm.controls).forEach((field) => {
        const control = this.addFacultyForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } 
      });
    }
  }
}
