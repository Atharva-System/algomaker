import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IStrategy, Strategy } from 'src/app/core/models/stretag.model';

@Component({
  selector: 'app-stretagybox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretagybox.component.html',
  styleUrls: ['./stretagybox.component.css'],
})
export class StretagyboxComponent {
  @Input() strategy: IStrategy = new Strategy();

  constructor() {
    this.initCharts();
  }
  bitcoin: any;

  initCharts() {
    // bitcoin
    this.bitcoin = {
      chart: {
        height: 45,
        type: 'line',
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        width: 2,
      },
      markers: {
        size: 0,
      },
      colors: ['#00ab55'],
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: (val: any) => {
              return '';
            },
          },
        },
      },
      responsive: [
        {
          breakPoint: 576,
          options: {
            chart: {
              height: 95,
            },
            grid: {
              padding: {
                top: 45,
                bottom: 0,
                left: 0,
              },
            },
          },
        },
      ],
      series: [
        {
          data: [21, 9, 36, 12, 44, 25, 59, 41, 25, 66],
        },
      ],
    };
  }
}
