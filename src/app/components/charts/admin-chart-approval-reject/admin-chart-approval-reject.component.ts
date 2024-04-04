import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { FacultyService } from 'src/app/services/faculty.service';
=======
import { StatisticService } from 'src/app/services/statistic.service';
>>>>>>> c54fb10e (add page, role, browser chart)
Chart.register(...registerables);

@Component({
  selector: 'app-admin-chart-approval-reject',
  templateUrl: './admin-chart-approval-reject.component.html',
  styleUrls: ['./admin-chart-approval-reject.component.css'],
})
export class AdminChartApprovalRejectComponent implements OnInit {
  lstStatistic: any = [];
  lstLabel: string[] = [];
  lstArticle: string[] = [];
  lstContributor: string[] = [];
  lstPercenContributor: string[] = [];
  lstPercenArticle: string[] = [];
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
  labelChart: string = 'Mix';
  barChart: any;
  lineChart: any;
  radarChart: any;
  displayBarChart: string = 'block';
  displayLineChart: string = 'none';
  displayRadarChart: string = 'none';

<<<<<<< HEAD
  public lstFaculty : any = [];

  constructor(
    private router: Router,
    private facultyAPI:FacultyService
  ) {}

  ngOnInit(): void {


    // Lấy dữ liệu từ backend sau đó truyền vào hàm bên dưới

    /*Ví dụ: Lấy dữ liệu id, title, num of article thì chuyền vào hàm bên dưới
    3 biến trên -> this.BarChart(this.id, this.title, this.numOfArticle, idCanvas, typeChart)

    idCanvas: là id canvas bên html (đặt bất kì tên gì). Mục đích để xác nhận cái chart này hiển thị ở canvas nào
    typeChart: là loại chart được hiển thị (mặc định: bar, pie, doughnut, polarAre, radar, v.v...). Ví dụ như: chart hình tròn, chart hình cột, chart hình ra đa, vân vân...

    Lưu ý: 2 biến idCanvas và typeChart ta có thể gán cứng vào hàm this.BarChart() như sau:

    this.BarChart(this.id, this.title, this.numOfArticle, 'pieChart', 'pie')
    this.BarChart(this.id, this.title, this.numOfArticle, 'barChart', 'bar')
    this.BarChart(this.id, this.title, this.numOfArticle, 'radarChart', 'radar')
     */


    this.BarChart();
=======
  constructor(
    private router: Router,
    private statisticService: StatisticService
  ) {}

  ngOnInit(): void {
    this.chartAdmin();
>>>>>>> c54fb10e (add page, role, browser chart)
  }

  chartAdmin() {
    this.statisticService.adminChart().subscribe((res) => {
      this.lstStatistic = res;
      this.lstStatistic.forEach(
        (item: {
          facultyName: any;
          contributors: any;
          articles: any;
          percenContributor: any;
          percenArticles: any;
        }) => {
          this.lstLabel.push(item.facultyName);
          this.lstArticle.push(item.contributors);
          this.lstContributor.push(item.articles);
          this.lstPercenContributor.push(item.percenContributor);
          this.lstPercenArticle.push(item.percenArticles);
        }
      );
      this.BarChart();
    });
  }

  RadarChart() {
    const data = {
      labels: this.lstLabel,
      datasets: [
        {
          label:
            'Percentage of total articles compared to the entire faculty (%)',
          data: this.lstPercenArticle,
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
      labels: this.lstLabel,
      datasets: [
        {
          label:
            'Percentage of total contributors compared to the entire faculty (%)',
          data: this.lstPercenContributor,
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
<<<<<<< HEAD
        labels: ['IT', 'Business', 'Graphic Design', 'Engineering', 'Law', 'Art'],
        datasets: [{
          label: 'Num of Contributors',

          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
          ],
          borderWidth: 1
        },
        {
          label: 'Num of Articles',

          data: [10, 12, 13, 15, 12, 13],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgb(54, 162, 235)',
          ],
          borderWidth: 1,

        }

      ],
=======
        labels: this.lstLabel,
        datasets: [
          {
            label: 'Num of Contributors',

            data: this.lstContributor,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgb(255, 99, 132)'],
            borderWidth: 1,
          },
          {
            label: 'Num of Articles',

            data: this.lstArticle,
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(54, 162, 235)'],
            borderWidth: 1,
          },
        ],
>>>>>>> c54fb10e (add page, role, browser chart)
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

<<<<<<< HEAD


=======
>>>>>>> c54fb10e (add page, role, browser chart)
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
    this.labelChart = 'Mix';
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
    this.labelChart = 'Contributor';
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
    this.labelChart = 'Article';
    this.displayRadarChart = 'block';
    this.displayBarChart = 'none';
    this.displayLineChart = 'none';
    this.RadarChart();
  }
}
