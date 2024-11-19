import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrl: './circle-chart.component.css',
})
export class CircleChartComponent {
  @ViewChild('chart') chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
