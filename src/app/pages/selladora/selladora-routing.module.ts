import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelladoraComponent } from './selladora.component';


const routes: Routes = [
  {
    path: "",
    component: SelladoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelladoraRoutingModule { }
