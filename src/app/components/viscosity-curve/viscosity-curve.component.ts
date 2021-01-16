import { Component, OnInit, ViewChild } from '@angular/core';
import { HotTableComponent } from '@handsontable/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-viscosity-curve',
  templateUrl: './viscosity-curve.component.html',
  styleUrls: ['./viscosity-curve.component.css'],
})
export class ViscosityCurveComponent implements OnInit {
  dataset: any[] = [
    {
      InjectionSpeed: 0.3,
      FillTime: 3.65,
      InjectionPressure: 875,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 0.6,
      FillTime: 1.81,
      InjectionPressure: 1015,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 0.9,
      FillTime: 0.95,
      InjectionPressure: 1365,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 1.2,
      FillTime: 0.72,
      InjectionPressure: 1514,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 1.5,
      FillTime: 0.58,
      InjectionPressure: 1685,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 1.8,
      FillTime: 0.45,
      InjectionPressure: 1758,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 2.1,
      FillTime: 0.3,
      InjectionPressure: 1824,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 2.4,
      FillTime: 0.25,
      InjectionPressure: 1875,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 2.7,
      FillTime: 0.22,
      InjectionPressure: 1908,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
    {
      InjectionSpeed: 3,
      FillTime: 0.21,
      InjectionPressure: 1925,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    },
  ];

  viscosityData: Array<number> = [0];
  injectionSpeedData: Array<number> = [0];

  public lineChartData: ChartDataSets[] = [{ data: [0], label: 'Viscosity' }];
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
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
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

  @ViewChild('hot', { static: false })
  hot!: HotTableComponent;
  @ViewChild(BaseChartDirective, { static: true })
  chart!: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {}

  addRow() {
    this.dataset.push({
      InjectionSpeed: 0,
      FillTime: 0,
      InjectionPressure: 0,
      PlasticPressure: 0,
      ShearRate: 0,
      Viscosity: 0,
      percentageVariation: 0,
    });
    this.hot.updateHotTable({ data: this.dataset });
  }

  addRows(numberRows: number) {
    console.log(numberRows);
    for (var i = 0; i < numberRows; i++) {
      this.dataset.push({
        InjectionSpeed: 0,
        FillTime: 0,
        InjectionPressure: 0,
        PlasticPressure: 0,
        ShearRate: 0,
        Viscosity: 0,
        percentageVariation: 0,
      });
    }
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteLastRow() {
    this.dataset.splice(-1, 1);
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteAllRows() {
    this.dataset = [
      {
        InjectionSpeed: 0,
        FillTime: 0,
        InjectionPressure: 0,
        PlasticPressure: 0,
        ShearRate: 0,
        Viscosity: 0,
        percentageVariation: 0,
      },
    ];
    this.hot.updateHotTable({ data: this.dataset });
  }

  calculate(intensificationRatio: number) {
    var previousViscosity = 0;
    this.dataset.forEach((element) => {
      element['PlasticPressure'] =
        element['InjectionPressure'] * intensificationRatio;
      element['ShearRate'] = 1 / element['FillTime'];
      element['Viscosity'] = element['FillTime'] * element['PlasticPressure'];
      element['percentageVariation'] =
        (element['Viscosity'] - previousViscosity) / previousViscosity;
      previousViscosity = element['Viscosity'];
    });
    this.hot.updateHotTable({ data: this.dataset });
    this.updateChart();
  }

  private updateChart() {
    this.viscosityData = this.dataset.map((element) => element['Viscosity']);
    this.injectionSpeedData = this.dataset.map(
      (element) => element['InjectionSpeed']
    );
    this.lineChartData = [{ data: this.viscosityData, label: 'Viscosity' }];
    this.lineChartLabels = this.injectionSpeedData.map(String);
    this.chart.update();
  }
}
