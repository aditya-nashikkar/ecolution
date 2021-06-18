import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-highchart-api',
  templateUrl: './highchart-api.component.html',
  styleUrls: ['./highchart-api.component.scss']
})
export class HighchartApiComponent implements OnInit {

  title = 'Angular 9 HighCharts';
  data1 = [12];
  data2 = [11];
  
  constructor() { }

  ngOnInit() {
    this.barChartPopulation();
  }

  barChartPopulation() {
    HighCharts.chart('barChart', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Carbon footprint'
      },
      xAxis: {
        categories: ['Comparision']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Carbon footprint %age',
          align: 'high'
        },
      },
      tooltip: {
        valueSuffix: '% carbon footprint'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        type: undefined,
        name: 'Yours',
        data: this.data1
      }, {
        type: undefined,
        name: 'Entire city',
        data: this.data2
      }]
    });
  }
}
