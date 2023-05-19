import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { TarjetpantallaComponent } from './tarjetpantalla.component';
const routes: Routes = [
  {
    path: "",
    component: TarjetpantallaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetpantallaRoutingModule { }
