import { Component, OnInit, ViewChild } from '@angular/core';
import { HotTableComponent } from '@handsontable/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-gate-seal',
  templateUrl: './gate-seal.component.html',
  styleUrls: ['./gate-seal.component.css'],
})
export class GateSealComponent implements OnInit {
  @ViewChild('hot', { static: false })
  hot!: HotTableComponent;

  dataset: any[] = [
    { time: 0, partWeight: 842.5 },
    { time: 2, partWeight: 865.5 },
    { time: 4, partWeight: 874.4 },
    { time: 6, partWeight: 885 },
    { time: 8, partWeight: 888.8 },
    { time: 10, partWeight: 891.1 },
    { time: 12, partWeight: 893.5 },
    { time: 14, partWeight: 894.7 },
    { time: 16, partWeight: 895.5 },
    { time: 18, partWeight: 896.2 },
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
    this.dataset.push({ time: 0, partWeight: 0 });
    this.hot.updateHotTable({ data: this.dataset });
  }

  addRows(numberRows: number) {
    for (var i = 0; i < numberRows; i++) {
      this.dataset.push({ time: 0, partWeight: 0 });
    }
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteLastRow() {
    this.dataset.splice(-1, 1);
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteAllRows() {
    this.dataset = [{ time: 0, partWeight: 0 }];
    this.hot.updateHotTable({ data: this.dataset });
  }

  graph() {
    this.lineChartLabels = this.dataset.map((value) => value['time']);
    this.lineChartData[0].data = this.dataset.map(
      (value) => +value['partWeight']
    );
  }
}
