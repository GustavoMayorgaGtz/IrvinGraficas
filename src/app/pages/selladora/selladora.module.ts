import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelladoraRoutingModule } from './selladora-routing.module';
import { SelladoraComponent } from './selladora.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [SelladoraComponent],
  imports: [
    CommonModule,
    SelladoraRoutingModule,
    NgApexchartsModule
  ]
})
export class SelladoraModule { }
