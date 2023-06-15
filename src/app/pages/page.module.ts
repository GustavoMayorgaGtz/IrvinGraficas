import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { MermaComponent } from './merma/merma.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MermaComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule  ,
    ComponentsModule
  ]
})
export class PageModule { }
