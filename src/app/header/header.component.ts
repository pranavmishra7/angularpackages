import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges  {
  @Input()
  displayMessage!: string;
  
  headerMessage:string="";
  /**
   *
   */
  constructor() {
   this.headerMessage=this.displayMessage;

  }
  ngOnChanges() {
    this.headerMessage=this.displayMessage+" " +new Date().getDay()
  }
}

