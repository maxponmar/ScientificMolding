import { Component, OnInit } from '@angular/core';
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

  constructor(
    private sidebarService: SidebarService,
    public changeThemeService: ChangethemeService
  ) { }

  ngOnInit(): void {
    this.sidebarService.change.subscribe((isOpen: boolean)=> {
      this.isOpen = isOpen;
    });
    this.changeThemeService.change.subscribe((isLight: boolean)=> {
      this.isLight = isLight;
    });
  }

}
