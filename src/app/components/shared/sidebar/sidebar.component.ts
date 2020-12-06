import { Component, HostBinding, OnInit } from '@angular/core';
import { ChangethemeService } from 'src/app/services/changetheme.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {  

  isOpen = false;
  isByHover = false;
  isLight = true;

  constructor(
    public sidebarService: SidebarService,
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

  enterHover(){
    this.isByHover = true;
    if(!this.isOpen){
      this.sidebarService.toggleSidebar();
    }
  }

  leaveHover(){
    if (this.isOpen){
      this.sidebarService.toggleSidebar();
    }
  }  

}
