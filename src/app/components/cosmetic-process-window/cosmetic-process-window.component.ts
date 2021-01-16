import { Component, OnInit, ViewChild } from '@angular/core';
import { HotTableComponent } from '@handsontable/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-cosmetic-process-window',
  templateUrl: './cosmetic-process-window.component.html',
  styleUrls: ['./cosmetic-process-window.component.css'],
})
export class CosmeticProcessWindowComponent implements OnInit {
  @ViewChild('hot', { static: false })
  hot!: HotTableComponent;

  @ViewChild(BaseChartDirective, { static: true })
  chart!: BaseChartDirective;

  public optimalTemperature: number = 400;
  public optimalPressure: number = 950;

  public graphed: boolean = false;

  dataset: any[] = [
    { meltMoldTemp: 390, lowProcess: 800, highProcess: 1200 },
    { meltMoldTemp: 410, lowProcess: 700, highProcess: 1100 },
  ];

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 0,
        },
        {
          x: 0,
          y: 0,
        },
      ],
      borderColor: 'black',
      borderWidth: 1,
      pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
      pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
      pointRadius: 5,
      pointHoverRadius: 5,
      fill: false,
      lineTension: 0,
      showLine: true,
      label: 'Process Parameters',
    },
    {
      data: [
        {
          x: 0,
          y: 0,
        },
      ],
      pointBackgroundColor: 'orange',
      pointBorderColor: 'darkorange',
      pointRadius: 5,
      pointHoverRadius: 7,
      label: 'Middle Point',
    },
  ];
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
  public lineChartType: ChartType = 'scatter';

  constructor() {}

  ngOnInit(): void {}

  updateGraph() {
    this.scatterChartData[0].data = [
      {
        x: +this.dataset[0]['meltMoldTemp'],
        y: +this.dataset[0]['lowProcess'],
      },
      {
        x: +this.dataset[0]['meltMoldTemp'],
        y: +this.dataset[0]['highProcess'],
      },
      {
        x: +this.dataset[1]['meltMoldTemp'],
        y: +this.dataset[1]['highProcess'],
      },
      {
        x: +this.dataset[1]['meltMoldTemp'],
        y: +this.dataset[1]['lowProcess'],
      },
      {
        x: +this.dataset[0]['meltMoldTemp'],
        y: +this.dataset[0]['lowProcess'],
      },
    ];
    this.optimalTemperature =
      (+this.dataset[0]['meltMoldTemp'] + +this.dataset[1]['meltMoldTemp']) / 2;
    this.optimalPressure =
      (+this.dataset[0]['lowProcess'] +
        +this.dataset[1]['lowProcess'] +
        +this.dataset[0]['highProcess'] +
        +this.dataset[1]['highProcess']) /
      4;
    this.scatterChartData[1].data = [
      {
        x: this.optimalTemperature,
        y: this.optimalPressure,
      },
    ];
    this.chart.update();
    this.graphed = true;
  }
}
