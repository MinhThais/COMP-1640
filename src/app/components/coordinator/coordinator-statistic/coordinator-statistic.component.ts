import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from 'src/app/services/academic-year.service';
import { StatisticService } from 'src/app/services/statistic.service';

@Component({
  selector: 'app-coordinator-statistic',
  templateUrl: './coordinator-statistic.component.html',
  styleUrls: ['./coordinator-statistic.component.css'],
})
export class CoordinatorStatisticComponent implements OnInit {
  academic_year_id: number = 0;
  lstStatistic: any = [];
  lstAcademicYear: any = [];

  constructor(
    private academicYearService: AcademicYearService,
    private statisticService: StatisticService
  ) {}

  ngOnInit() {
    this.academicYearService.getAllAcademicYear().subscribe((res) => {
      this.lstAcademicYear = res;
    });

    this.getStatistic(this.academic_year_id);
  }

  onChageAcademicYear(event: any) {
    this.academic_year_id = event.target.value;
    this.getStatistic(this.academic_year_id);
  }

  getStatistic(id: number) {
    this.statisticService
      .coordinatorStatistic(this.academic_year_id)
      .subscribe((res) => {
        this.lstStatistic = res;
      });
  }
}
