import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetRoutingModule } from './tarjet-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserModule } from '@angular/platform-browser';
import { TarjetComponent } from './tarjet.component';

@NgModule({
  declarations: [TarjetComponent],
  imports: [
    CommonModule,
    
    TarjetRoutingModule,
    NgApexchartsModule
  ],
})
export class TarjetModule { }
