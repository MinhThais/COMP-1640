import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AcademicYearService } from 'src/app/services/academic-year.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-academic-year',
  templateUrl: './add-academic-year.component.html',
  styleUrls: ['./add-academic-year.component.css']
})
export class AddAcademicYearComponent {
  addAcademicForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: UserService,
    private addAcademicYear: AcademicYearService,
    private route: Router
    ){
  }

  ngOnInit(): void {
    this.addAcademicForm = this.fb.group({
      academic_year_title:['', Validators.required],
      academic_Year_startClosureDate:['', Validators.required],
      academic_Year_endClosureDate:['', Validators.required]
    })
  }

  addAcademic(){
    if(this.addAcademicForm.valid){
      const startClosureDate = moment(new Date(this.addAcademicForm.get('academic_Year_startClosureDate')?.value)).format('YYYY-MM-DDTHH:mm:ss');
      const endClosureDate = moment(new Date(this.addAcademicForm.get('academic_Year_endClosureDate')?.value)).format('YYYY-MM-DDTHH:mm:ss');

      let academicYear = {
        academic_year_title:this.addAcademicForm.get('academic_year_title')?.value,
        academic_Year_startClosureDate: startClosureDate,
        academic_Year_endClosureDate: endClosureDate
      }
        this.addAcademicYear.addAcademicYear(academicYear).subscribe(
        (res)=>{
          this.addAcademicForm.reset();
          this.route.navigate(["Management-AcademicYear"])
        },
        (err) =>{
          console.log(err)
        }
      );
    }
    else{
      Object.keys(this.addAcademicForm.controls).forEach((field) => {
        const control = this.addAcademicForm.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } 
      });
    }
  }
}
