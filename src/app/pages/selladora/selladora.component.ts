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


  public graficaOEE!: GraficaRadial;
  public graficaD!: GraficaRadial;
  public graficaR!: GraficaRadial;
  public graficaC!: GraficaRadial;
  public graficaE!: GraficaRadial;
  ngOnInit(): void {
    const graficaE = new RadialGraph();
    graficaE.defineLabel("Calidad");
    graficaE.defineValue(100);
    graficaE.defineColors(50,60,70,80);
    this.graficaE = graficaE.getParameters();

    const graficaOEE = new RadialGraph();
    graficaOEE.defineLabel("OEE");
    graficaOEE.defineValue(100);
    this.graficaOEE= graficaOEE.getParameters();
    
    const graficaD = new RadialGraph();
    graficaD.defineLabel("Disponibilidad");
    graficaD.defineValue(100);
    this.graficaD = graficaD.getParameters();

    const graficaR = new RadialGraph();
    graficaR.defineLabel("Rendimiento");
    graficaR.defineValue(100);
    this.graficaR = graficaR.getParameters();

    const graficaC = new RadialGraph();
    graficaC.defineLabel("Calidad");
    graficaC.defineValue(100);
    this.graficaC = graficaC.getParameters();
  }
}
