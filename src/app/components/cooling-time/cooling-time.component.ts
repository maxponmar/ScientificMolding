import { Component, OnInit, ViewChild } from '@angular/core';
import { HotTableComponent } from '@handsontable/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-cooling-time',
  templateUrl: './cooling-time.component.html',
  styleUrls: ['./cooling-time.component.css'],
})
export class CoolingTimeComponent implements OnInit {
  @ViewChild('hot', { static: false })
  hot!: HotTableComponent;

  dataset: any[] = [
    { coolingTime: 1, dimension: 7 },
    { coolingTime: 2, dimension: 23 },
    { coolingTime: 3, dimension: 23.85 },
    { coolingTime: 4, dimension: 24.75 },
    { coolingTime: 5, dimension: 25.8 },
    { coolingTime: 6, dimension: 26.85 },
    { coolingTime: 7, dimension: 27.9 },
    { coolingTime: 8, dimension: 27.9 },
    { coolingTime: 9, dimension: 27.9 },
  ];

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0], label: 'Gate Seal' },
  ];
  public lineChartLabels: Label[] = ['0'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          },
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  constructor() {}

  ngOnInit(): void {}

  addRow() {
    this.dataset.push({ coolingTime: 0, dimension: 0 });
    this.hot.updateHotTable({ data: this.dataset });
  }

  addRows(numberRows: number) {
    for (var i = 0; i < numberRows; i++) {
      this.dataset.push({ coolingTime: 0, dimension: 0 });
    }
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteLastRow() {
    this.dataset.splice(-1, 1);
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteAllRows() {
    this.dataset = [{ coolingTime: 0, dimension: 0 }];
    this.hot.updateHotTable({ data: this.dataset });
  }

  graph() {
    this.lineChartLabels = this.dataset.map((value) => value['coolingTime']);
    this.lineChartData[0].data = this.dataset.map(
      (value) => +value['dimension']
    );
  }
}
