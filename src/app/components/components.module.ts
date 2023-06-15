import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleMermaComponent } from './detalle-merma/detalle-merma.component';



@NgModule({
  declarations: [DetalleMermaComponent],
  imports: [
    CommonModule
  ],
  exports:[DetalleMermaComponent]
})
export class ComponentsModule { }
