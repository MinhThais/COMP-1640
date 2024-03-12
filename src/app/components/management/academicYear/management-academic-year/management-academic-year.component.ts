import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from '../../../../services/academic-year.service';

@Component({
  selector: 'app-management-academic-year',
  templateUrl: './management-academic-year.component.html',
  styleUrls: ['./management-academic-year.component.css']
})
export class ManagementAcademicYearComponent implements OnInit {
  public academicYears: any = []

  constructor(private academicService: AcademicYearService){}

  ngOnInit(){
      this.academicService.getAllAcademicYear().subscribe(
        (res) => {
          this.academicYears = res;
        },
        (err) =>{
          console.log("error")
        }
      )
  }
}
