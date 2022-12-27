import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports:[HeaderComponent]
})
export class GHeaderModule { }
