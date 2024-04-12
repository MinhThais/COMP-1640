import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from 'src/app/services/academic-year.service';
import { FacultyService } from 'src/app/services/faculty.service';
import { StatisticService } from 'src/app/services/statistic.service';

@Component({
  selector: 'app-manager-statistic-approve-reject',
  templateUrl: './manager-statistic-approve-reject.component.html',
  styleUrls: ['./manager-statistic-approve-reject.component.css']
})
export class ManagerStatisticApproveRejectComponent implements OnInit{

  public lstFaculty : any = [];
  public lstAcademic : any = [];
  public lstStatistic : any = [];

  selectedFaculty : number = 0;
  selectAcademic : number = 0;
  pageSize = 5;
  currentPage = 1;

  constructor(
    private facultyAPI : FacultyService,
    private academicAPI : AcademicYearService,
    private statisticalAPI : StatisticService
  ){}

  ngOnInit(): void {
    this.getAllAcademicYear();
    this.getAllFaculty();
  }

  getAllAcademicYear(){
    this.academicAPI.getAllAcademicYear().subscribe(data => {
      this.lstAcademic = data;
    });
  }

  getAllFaculty(){
    this.facultyAPI.getAllFaculty().subscribe(data => {
      this.lstFaculty = data.filter((item: { faculty_name: string; }) => item.faculty_name !== "None");
    });
  }

  sort(){
    this.statisticalAPI.statisticalContributionApprovedRejected(this.selectAcademic, this.selectedFaculty).subscribe(data => {
      this.lstStatistic = data;
    });
  }
}
