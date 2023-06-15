import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MermaComponent } from './merma.component';

const routes: Routes = [
  {
    path: "",
    component: MermaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MermaRoutingModule { }
