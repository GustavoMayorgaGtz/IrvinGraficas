import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelladoraRoutingModule } from './selladora-routing.module';
import { SelladoraComponent } from './selladora.component';



@NgModule({
  declarations: [SelladoraComponent],
  imports: [
    CommonModule,
    SelladoraRoutingModule
  ]
})
export class SelladoraModule { }
