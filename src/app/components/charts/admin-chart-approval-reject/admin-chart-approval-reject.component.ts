import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
import { Router } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-admin-chart-approval-reject',
  templateUrl: './admin-chart-approval-reject.component.html',
  styleUrls: ['./admin-chart-approval-reject.component.css']
})
export class AdminChartApprovalRejectComponent implements OnInit {
  //Color
  red: string = '#ff014fff';
  white: string = 'white'
  //Button
  idButtonBar: string = 'btn-readMore1'
  idButtonLine: string = 'btn-readMore'
  idButtonRadar: string = 'btn-readMore'
  buttonBarLetter: string = this.white;
  buttonBarBackground: string = this.red;
  buttonLineLetter: string = this.red;
  buttonLineBackground: string = this.white;
  buttonRadarLetter: string = this.red;
  buttonRadarBackground: string = this.white;
  //Chart
  labelChart: string = 'Bar';
  barChart: any;
  lineChart: any;
  radarChart: any;
  displayBarChart: string = 'block';
  displayLineChart: string = 'none';
  displayRadarChart: string = 'none';


  constructor(
    private router: Router,
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
    // this.RadarChart();
    // this.LineChart();

  }



  /*Bên dưới hàm này khai báo dữ liệu đã truyền ở hàm bên trên vào hàm bên dưới này 

  BarChar(id:any, title:any, numOfArticle:any, idCanvas:any, typeChart:any){
     new Chart(idCanvas, {
    type: typeChart,
    data: {
      labels: title,
      datasets: [{
        label: '# of Votes',
  
        data: numOfArticle,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }
  }
  */

  // Chart functions
  RadarChart(){
  this.radarChart =  new Chart("radarLineChart", {
    type: 'radar',
    data: {
      labels: ['IT', 'Business', 'Graphic Design', 'Engineering', 'Law', 'Art'],
      datasets: [{
        label: 'Num of Contributors',

        data: [12, 19, 3, 5, 2, 3],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      },
      {
        label: 'Num of Articles',
  
        data: [10, 12, 13, 15, 12, 13],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
  
      }

    ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  }

  LineChart(){
    this.radarChart =  new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['IT', 'Business', 'Graphic Design', 'Engineering', 'Law', 'Art'],
        datasets: [{
          label: 'Num of Contributors',
  
          data: [12, 19, 3, 5, 2, 3],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)',
          borderWidth: 1
        },
        {
          label: 'Num of Articles',
    
          data: [10, 12, 13, 15, 12, 13],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
    
        }
  
      ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    }

  BarChart(){
    this.barChart =  new Chart("barChart", {
      type: 'bar',
      data: {
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
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  

  //Click Events

  onPage(){
    this.router.navigate(['/Admin-Statistic']);
  }

  onBar(){
    this.idButtonBar= 'btn-readMore1'
    this.idButtonLine= 'btn-readMore'
    this.idButtonRadar= 'btn-readMore'
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

  onLine(){
    this.idButtonLine= 'btn-readMore1'
    this.idButtonBar= 'btn-readMore'
    this.idButtonRadar= 'btn-readMore'
    this.buttonLineLetter = this.white;
    this.buttonLineBackground = this.red;
    this.buttonBarLetter = this.red;
    this.buttonBarBackground = this.white;
    this.buttonRadarLetter = this.red;
    this.buttonRadarBackground = this.white;
    this.labelChart = 'Line';
    this.displayLineChart = 'block';
    this.displayBarChart = 'none';
    this.displayRadarChart = 'none';
    this.LineChart();
  }

  onRadar(){
    this.idButtonRadar= 'btn-readMore1'
    this.idButtonBar= 'btn-readMore'
    this.idButtonLine= 'btn-readMore'
    this.buttonRadarLetter = this.white;
    this.buttonRadarBackground =  this.red;
    this.buttonLineLetter = this.red;
    this.buttonLineBackground = this.white;
    this.buttonBarLetter = this.red;
    this.buttonBarBackground = this.white;
    this.labelChart = 'Radar';
    this.displayRadarChart = 'block';
    this.displayBarChart = 'none';
    this.displayLineChart = 'none';
    this.RadarChart();
  }
}
