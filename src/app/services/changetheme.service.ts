import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangethemeService {

  constructor() { }

  light = true;  
  
  @Output() change: EventEmitter<boolean> = new EventEmitter();  
  
  toggleTheme() {
    this.light = !this.light;    
    this.change.emit(this.light);    
    console.log(this.light);
  }
}