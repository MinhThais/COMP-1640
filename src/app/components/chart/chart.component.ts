import { Component } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent{

  // construtor(){}
  // ngOnInit();

}


