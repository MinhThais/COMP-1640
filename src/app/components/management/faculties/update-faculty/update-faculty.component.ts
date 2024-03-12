import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent {
  updateFacultyForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private updateFaculty: FacultyService
    ){
  }

  ngOnInit(): void {
    this.updateFacultyForm = this.fb.group({
      faculty_name:['', Validators.required]
    })
  }

  onUpdate(){
    if(this.updateFacultyForm.valid){
      let fa = {
        faculty_id: 1,
        faculty_name: this.updateFacultyForm.get('faculty_name')?.value
      }
      //console.log(fa)
        this.updateFaculty.updateFaculty(fa).subscribe(
        (res)=>{
          console.log("success")
        },
        (err) =>{
          console.log(err.message)
        }
      );
    }
    else{
      Object.keys(this.updateFacultyForm.controls).forEach((field) => {
        const control = this.updateFacultyForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } 
      });
    }
  }
}
