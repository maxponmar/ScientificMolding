import { Component, OnInit } from '@angular/core';
import { ChangethemeService } from 'src/app/services/changetheme.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLight = true;

  constructor(
    private sidebarService: SidebarService,
    public changeThemeService: ChangethemeService
  ) { }

  ngOnInit(): void {
    this.changeThemeService.change.subscribe((isLight: boolean)=> {
      this.isLight = isLight;
    });
  }

  toggleSidebar(){
    this.sidebarService.toggleSidebar();
  }  

  toggleTheme(){
    this.changeThemeService.toggleTheme();
  }
}
