import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { Router } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-admin-chart-page-browser',
  templateUrl: './admin-chart-page-browser.component.html',
  styleUrls: ['./admin-chart-page-browser.component.css'],
})
export class AdminChartPageBrowserComponent implements OnInit {
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
  labelChart: string = 'Pages';
  barChart: any;
  lineChart: any;
  radarChart: any;
  displayBarChart: string = 'block';
  displayLineChart: string = 'none';
  displayRadarChart: string = 'none';

  //Selected
  selectedPage: string = 'block';
  selectedBrowser: string = 'none';
  selectedRole: string = 'none';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.BarChart();
  }

  //Role
  RadarChart() {
    this.barChart = new Chart('radarChart', {
      type: 'bar',
      data: {
        labels: [
          'Admin',
          'Manager',
          'Coordinator',
          'Student',
          'Guest'
        ],
        datasets: [
          {
            label: 'Total Visits',

            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [  'rgba(255, 99, 132, 0.2)'],
            borderColor: [ 'rgb(255, 99, 132)'],
            borderWidth: 1,
          },
          {
            label: 'Average Time per Visit (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 1,
          }, 
          {
            label: 'Daily average time (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: [  'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgb(75, 192, 192)'],
            borderWidth: 1,
          },
          {
            label: 'Total Active Time (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: [  'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(54, 162, 235)'],
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

  //Browser
  LineChart() {
    this.barChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        labels: [
          'Google Chrome',
          'Mozilla Firefox',
          'Microsoft Edge',
        ],
        datasets: [
          {
            label: 'Total Visits',

            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [  'rgba(255, 99, 132, 0.2)'],
            borderColor: [ 'rgb(255, 99, 132)'],
            borderWidth: 1,
          },
          {
            label: 'Average Time per Visit (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 1,
          }, 
          {
            label: 'Daily average time (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: [  'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgb(75, 192, 192)'],
            borderWidth: 1,
          },
          {
            label: 'Total Active Time (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: [  'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(54, 162, 235)'],
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

  //Page
  BarChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: [
          'View-Student',
          'View-Comment',
          'View-Pub',
          'Manager-Chart-After',
          'Admin-Statistic',
          'Admin-Chart',
        ],
        datasets: [
          {
            label: 'Total Visits',

            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [  'rgba(255, 99, 132, 0.2)'],
            borderColor: [ 'rgb(255, 99, 132)'],
            borderWidth: 1,
          },
          {
            label: 'Average Time per Visit (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: ['rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgb(255, 159, 64)'],
            borderWidth: 1,
          }, 
          {
            label: 'Daily average time (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: [  'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgb(75, 192, 192)'],
            borderWidth: 1,
          },
          {
            label: 'Total Active Time (hours)',

            data: [10, 12, 13, 15, 12, 13],
            backgroundColor: [  'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(54, 162, 235)'],
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
    this.labelChart = 'Pages';
    this.displayBarChart = 'block';
    this.displayLineChart = 'none';
    this.displayRadarChart = 'none';
    this.selectedPage = 'block';
    this.selectedBrowser = 'none';
    this.selectedRole = 'none';
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
    this.labelChart = 'Browsers';
    this.displayLineChart = 'block';
    this.displayBarChart = 'none';
    this.displayRadarChart = 'none';
    this.selectedBrowser = 'block';
    this.selectedPage = 'none';
    this.selectedRole = 'none';
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
    this.labelChart = 'Roles';
    this.displayRadarChart = 'block';
    this.displayBarChart = 'none';
    this.displayLineChart = 'none';
    this.selectedRole = 'block';
    this.selectedBrowser = 'none';
    this.selectedPage = 'none';
    this.RadarChart();
  }
}
