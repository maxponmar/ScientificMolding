import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HotColumnComponent, HotTableComponent } from '@handsontable/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-pressure-drop',
  templateUrl: './pressure-drop.component.html',
  styleUrls: ['./pressure-drop.component.css'],
})
export class PressureDropComponent implements OnInit {
  @ViewChild('hot', { static: false })
  hot!: HotTableComponent;

  dataset: any[] = [
    { section: 'Nozzle', pressure: 2000 },
    { section: 'Sprue', pressure: 2500 },
    { section: 'Runner', pressure: 3000 },
    { section: 'Gate', pressure: 5500 },
    { section: 'Mid Part', pressure: 6000 },
    { section: 'EOF', pressure: 6800 },
  ];

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0], label: 'Pressure Drop' },
  ];
  public lineChartLabels: Label[] = ['0'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
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
    this.dataset.push({ section: '', pressure: 0 });
    this.hot.updateHotTable({ data: this.dataset });
  }

  addRows(numberRows: number) {
    for (var i = 0; i < numberRows; i++) {
      this.dataset.push({ section: '', pressure: 0 });
    }
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteLastRow() {
    this.dataset.splice(-1, 1);
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteAllRows() {
    this.dataset = [{ section: '', pressure: 0 }];
    this.hot.updateHotTable({ data: this.dataset });
  }

  graph() {
    this.lineChartLabels = this.dataset.map((value) => value['section']);
    this.lineChartData[0].data = this.dataset.map(
      (value) => +value['pressure']
    );
  }
}
