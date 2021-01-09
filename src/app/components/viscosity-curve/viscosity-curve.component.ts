import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viscosity-curve',
  templateUrl: './viscosity-curve.component.html',
  styleUrls: ['./viscosity-curve.component.css']
})
export class ViscosityCurveComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
