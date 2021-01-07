import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-title',
  templateUrl: './study-title.component.html'  
})
export class StudyTitleComponent implements OnInit {

  @Input() name: string;

  constructor() { 
    this.name= '';
  }

  ngOnInit(): void {
  }

}
