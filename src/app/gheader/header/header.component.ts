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
  dateformatter()
  {
    let dt = new Date()
    return dt.getDate().toString()+"-"+(dt.getMonth()+1).toString()+"-"+dt.getFullYear().toString()+"-"+dt.getHours().toString()+"-"+dt.getMinutes().toString()+"-"+dt.getSeconds().toString();
  }
  ngOnChanges() {
    this.headerMessage=this.displayMessage+" " +this.dateformatter();
  }
}

