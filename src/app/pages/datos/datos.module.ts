import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosRoutingModule } from './datos-routing.module';
import { DatosComponent } from './datos.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [DatosComponent],
  imports: [
    CommonModule,
    DatosRoutingModule,
    NgApexchartsModule,
    ComponentsModule
  ]
})
export class DatosModule { }
