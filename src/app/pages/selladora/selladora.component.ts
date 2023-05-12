import { Component, OnInit } from '@angular/core';
import { RadialGraph } from './RadialGraph';
import { GraficaRadial } from 'src/app/Interfaces';



@Component({
  selector: 'app-selladora',
  templateUrl: './selladora.component.html',
  styleUrls: ['./selladora.component.scss', '../general-style.scss']
})

export class SelladoraComponent implements OnInit {
 
  constructor() {
  }


  public grafica1!:GraficaRadial;
  ngOnInit(): void {
    const grap1 = new RadialGraph();
    grap1.defineLabel("OEE");
    grap1.defineValue(100);
    const {series, chart, labels, plotOptions, fill, stroke } = grap1.getParameters();
    this.grafica1 = {
      series,
      chart,
      labels,
      plotOptions,
      fill,
      stroke
    }
  }
}
