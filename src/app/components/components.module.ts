import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleMermaComponent } from './detalle-merma/detalle-merma.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [DetalleMermaComponent, LoadingComponent],
  imports: [
    CommonModule
  ],
  exports:[DetalleMermaComponent, LoadingComponent]
})
export class ComponentsModule { }
