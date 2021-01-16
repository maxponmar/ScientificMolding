import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HotColumnComponent, HotTableComponent } from '@handsontable/angular';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-cavity-balance',
  templateUrl: './cavity-balance.component.html',
  styleUrls: ['./cavity-balance.component.css'],
})
export class CavityBalanceComponent implements OnInit {
  @ViewChild('hot', { static: false })
  hot!: HotTableComponent;

  private noColumns: number = 3;

  dataset: any[] = [
    { weight1: 0.752, weight2: 2.328, weight3: 7.154 },
    { weight1: 0.77, weight2: 2.359, weight3: 7.368 },
    { weight1: 0.734, weight2: 2.254, weight3: 7.598 },
    { weight1: 0.725, weight2: 2.275, weight3: 7.836 },
  ];

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0], label: 'Weight 1' },
    { data: [0, 0, 0], label: 'Weight 2' },
    { data: [0, 0, 0], label: 'Weight 3' },
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

  constructor() {}

  ngOnInit(): void {}

  addRow() {
    this.dataset.push(this.getRow());
    this.hot.updateHotTable({ data: this.dataset });
  }

  addRows(numberRows: number) {
    let newRow = this.getRow();
    for (var i = 0; i < numberRows; i++) {
      this.dataset.push(newRow);
    }
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteLastRow() {
    this.dataset.splice(-1, 1);
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteAllRows() {
    let row = this.getRow();
    this.dataset = [{ row }];
    this.hot.updateHotTable({ data: this.dataset });
  }

  addColumn() {
    this.noColumns++;

    this.dataset.forEach((element) => {
      element['weight' + String(this.noColumns)] = 0;
    });

    var newColumn = new HotColumnComponent(this.hot);
    newColumn.title = 'Weight ' + String(this.noColumns);
    newColumn.data = 'weight' + String(this.noColumns);

    this.hot.addColumn(newColumn);
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteColumn() {
    if (this.noColumns > 1) {
      this.dataset.forEach((element) => {
        delete element['weight' + String(this.noColumns)];
      });

      var oldColumn = new HotColumnComponent(this.hot);
      oldColumn.title = 'Weight ' + String(this.noColumns);
      oldColumn.data = 'weight' + String(this.noColumns);

      this.noColumns--;

      this.hot.removeColumn(oldColumn);
      this.hot.updateHotTable({ data: this.dataset });
    }
  }

  calculate() {
    let variationRow: any = {};

    let columnNames = Object.entries(this.dataset[0]);
    let index = 0;

    columnNames.forEach((element) => {
      let column = this.extractColumn(String(element[0]));
      index++;
      let max = Math.max(...column);
      let min = Math.min(...column);
      let variation = (max - min) / min;
      variationRow[String(element[0])] = variation.toFixed(6);
    });

    this.dataset.push(variationRow);
    this.hot.updateHotTable({ data: this.dataset });

    this.updateChart();
  }

  private getRow() {
    let columnNames = Object.entries(this.dataset[0]);
    let newRow: any = {};
    let index = 0;
    columnNames.forEach((element) => {
      newRow[columnNames[index][0]] = 0;
      index++;
    });
    return newRow;
  }

  private extractColumn(column: string) {
    return this.dataset.map((value) => +value[column]);
  }

  private updateChart() {
    this.lineChartData = [{ data: [0], label: '' }];
    this.lineChartLabels = ['0'];

    this.lineChartData.splice(-1, 1);
    this.lineChartLabels.splice(-1, 1);

    let columnNames = Object.entries(this.dataset[0]);
    let index = 1;

    columnNames.forEach((element) => {
      let columnData = this.extractColumn(String(element[0]));
      this.lineChartData.push({
        data: columnData,
        label: String(element),
      });
      index++;
      this.lineChartLabels.push(String(index));
    });
  }
}
