import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HotTableComponent } from '@handsontable/angular';
import { ChangethemeService } from 'src/app/services/changetheme.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-viscosity-curve',
  templateUrl: './viscosity-curve.component.html',
  styleUrls: ['./viscosity-curve.component.css']
})
export class ViscosityCurveComponent implements OnInit {

  isOpen = false;
  isLight = true;

  @ViewChild("hot") hot: HotTableComponent | any;

  dataset: any[] = [
    {InjectionSpeed: 0.3, FillTime: 12.17, InjectionPressure: 2635, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0.6, FillTime: 6.13, InjectionPressure: 2970, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0.9, FillTime: 4.11, InjectionPressure: 2845, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 1.2, FillTime: 3.1, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0},
    {InjectionSpeed: 0, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0}
  ];

  constructor(
    private sidebarService: SidebarService,
    public changeThemeService: ChangethemeService
  ) {

  }

  ngOnInit(): void {
    this.sidebarService.change.subscribe((isOpen: boolean)=> {
      this.isOpen = isOpen;
    });
    this.changeThemeService.change.subscribe((isLight: boolean)=> {
      this.isLight = isLight;
    });
  }

  addRows(numberOfRows: number){
    for(var _i = 0; _i < numberOfRows; _i++){
      this.dataset.push({InjectionSpeed: 0, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0});
    }
    this.hot.updateHotTable({ data: this.dataset });
  }

  addIncrementalRows(initialValue: number, stepValue: number, timesValue: number){
    var number=  initialValue;
    for(var _i = 0; _i < timesValue; _i++){
      this.dataset.push({InjectionSpeed: number, FillTime: 0, InjectionPressure: 0, PlasticPressure: 0, ShearRate: 0, Viscosity: 0, percentageVariation: 0});
      number += stepValue;
    }
    this.hot.updateHotTable({ data: this.dataset });
  }

  deleteRows(){
    this.dataset = [];
    this.hot.updateHotTable({ data: this.dataset });
  }

  calculate(intensificationRatio: number) {
    var previousViscosity = 0;
    this.dataset.forEach(element => {
      element["PlasticPressure"] = intensificationRatio * element["InjectionPressure"];
      element["ShearRate"] = 1 / element["FillTime"];
      element["Viscosity"] = element["FillTime"] * element["PlasticPressure"];
      element["percentageVariation"] = (element["Viscosity"] - previousViscosity)/previousViscosity;
      previousViscosity = element["Viscosity"];
    });
    this.hot.updateHotTable({ data: this.dataset });
  }

}
