import { Component, OnInit } from '@angular/core';
import { ChangethemeService } from 'src/app/services/changetheme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLight = true;
  
  constructor(
    public changeThemeService: ChangethemeService
  ) { }

  ngOnInit(): void {
    this.changeThemeService.change.subscribe((isLight: boolean)=> {
      this.isLight = isLight;
    });
  }

}
