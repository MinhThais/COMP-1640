import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';
import { StatisticService } from 'src/app/services/statistic.service';
import { AcademicYearService } from 'src/app/services/academic-year.service';
Chart.register(...registerables);

@Component({
  selector: 'app-manager-chart-approval-reject',
  templateUrl: './manager-chart-approval-reject.component.html',
  styleUrls: ['./manager-chart-approval-reject.component.css'],
})
export class ManagerChartApprovalRejectComponent implements OnInit {
  //Color
  red: string = '#ff014fff';
  white: string = 'white';
  //Button
  idButtonBar: string = 'btn-readMore1';
  idButtonLine: string = 'btn-readMore';
  idButtonRadar: string = 'btn-readMore';
  buttonBarLetter: string = this.white;
  buttonBarBackground: string = this.red;
  buttonLineLetter: string = this.red;
  buttonLineBackground: string = this.white;
  buttonRadarLetter: string = this.red;
  buttonRadarBackground: string = this.white;
  //Chart
  labelChart: string = 'Article';
  barChart: any;
  lineChart: any;
  radarChart: any;
  displayBarChart: string = 'block';
  displayLineChart: string = 'none';
  displayRadarChart: string = 'none';


  public lstAcademic : any = [];
  public lstStatistic : any = [];

  public selectAcademic : number = 0;

  constructor(
    private router: Router,
    private statisticAPI:StatisticService,
    private academicAPI:AcademicYearService
  ) {}

  ngOnInit(): void {
    this.getAllAcademic();
    this.BarChart();
  }

  sort(){
    this.statisticAPI.statisticalContributionApprovedRejectedChart(this.selectAcademic).subscribe(data => {
      this.lstStatistic = data;
    })
  }

  getAllAcademic(){
    this.academicAPI.getAllAcademicYear().subscribe(data => {
      this.lstAcademic = data;
      this.lineChart(data);
    });
  }

  RadarChart() {
    const data = {
      labels: ['IT', 'Business', 'Graphic Design', 'Engineering', 'Law', 'Art'],
      datasets: [
        {
          label:
            'Approval Rate (%)',
          data: [300, 50, 100, 50, 50, 70],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            '#71b657',
            '#e3632d',
            '#6c757d',
          ],
          hoverOffset: 4,
        },
      ],
    };

    this.radarChart = new Chart('radarChart', {
      type: 'pie',
      data: data,

      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  LineChart() {
    const data = {
      labels: ['IT', 'Business', 'Graphic Design', 'Engineering', 'Law', 'Art'],
      datasets: [
        {
          label:
            'Reject Rate (%)',
          data: [300, 50, 100, 50, 50, 70],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            '#71b657',
            '#e3632d',
            '#6c757d',
          ],
          hoverOffset: 4,
        },
      ],
    };

    this.radarChart = new Chart('lineChart', {
      type: 'pie',
      data: data,

      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  BarChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [this.lstStatistic.faculty_name],
        datasets: [
          {
            label: 'Num of Reject',

            data: [this.lstStatistic.numberContributionRejected],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgb(255, 99, 132)'],
            borderWidth: 1,
          },
          {
            label: 'Num of Approval',

            data: [this.lstStatistic.numberContributionApproved],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(54, 162, 235)'],
            borderWidth: 1,
          },
          {
            label: 'Total Article',

            data: [this.lstStatistic.numberContribution],
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 1,
          },
          {
            label: 'Total Contributor',

            data: [this.lstStatistic.numberContributor],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgb(75, 192, 192)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  //Click Events

  onPage() {
    this.router.navigate(['/Admin-Statistic']);
  }

  onBar() {
    this.idButtonBar = 'btn-readMore1';
    this.idButtonLine = 'btn-readMore';
    this.idButtonRadar = 'btn-readMore';
    this.buttonBarLetter = this.white;
    this.buttonBarBackground = this.red;
    this.buttonLineLetter = this.red;
    this.buttonLineBackground = this.white;
    this.buttonRadarLetter = this.red;
    this.buttonRadarBackground = this.white;
    this.labelChart = 'Bar';
    this.displayBarChart = 'block';
    this.displayLineChart = 'none';
    this.displayRadarChart = 'none';
    this.BarChart();
    // const type = 'bar';
    // this.barChart.config.type = type;
    // this.barChart.update();
  }

  onLine() {
    this.idButtonLine = 'btn-readMore1';
    this.idButtonBar = 'btn-readMore';
    this.idButtonRadar = 'btn-readMore';
    this.buttonLineLetter = this.white;
    this.buttonLineBackground = this.red;
    this.buttonBarLetter = this.red;
    this.buttonBarBackground = this.white;
    this.buttonRadarLetter = this.red;
    this.buttonRadarBackground = this.white;
    this.labelChart = 'Reject Rate';
    this.displayLineChart = 'block';
    this.displayBarChart = 'none';
    this.displayRadarChart = 'none';
    this.LineChart();
  }

  onRadar() {
    this.idButtonRadar = 'btn-readMore1';
    this.idButtonBar = 'btn-readMore';
    this.idButtonLine = 'btn-readMore';
    this.buttonRadarLetter = this.white;
    this.buttonRadarBackground = this.red;
    this.buttonLineLetter = this.red;
    this.buttonLineBackground = this.white;
    this.buttonBarLetter = this.red;
    this.buttonBarBackground = this.white;
    this.labelChart = 'Approval Rate';
    this.displayRadarChart = 'block';
    this.displayBarChart = 'none';
    this.displayLineChart = 'none';
    this.RadarChart();
  }
}
