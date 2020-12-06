import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  collapsed = false;  
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();  
  
  toggleSidebar() {
    this.collapsed = !this.collapsed;    
    this.change.emit(this.collapsed);    
  }
}

