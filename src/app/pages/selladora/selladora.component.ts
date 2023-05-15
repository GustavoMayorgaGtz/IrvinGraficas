import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RadialGraph } from './RadialGraph';
import { GraficaRadial } from 'src/app/Interfaces';



@Component({
  selector: 'app-selladora',
  templateUrl: './selladora.component.html',
  styleUrls: ['./selladora.component.scss', '../general-style.scss']
})

export class SelladoraComponent implements OnInit, AfterViewInit {

  @ViewChild('ContenedorGraficas') ContenedorGraficas !: ElementRef<HTMLDivElement>;
  public contenedor_graficas!: HTMLDivElement;
  public graficaOEE = new RadialGraph();
  public graficaD = new RadialGraph();
  public graficaR = new RadialGraph();
  public graficaC = new RadialGraph();
  public G_OEE!: GraficaRadial;
  public G_D!: GraficaRadial;
  public G_R!: GraficaRadial;
  public G_C!: GraficaRadial;

  constructor() {
  }

  ngAfterViewInit(): void {
    if (this.ContenedorGraficas) {
      this.contenedor_graficas = this.ContenedorGraficas.nativeElement;
      this.define_graficas();
    }
  }

  ngOnInit(): void {
    this.graficaOEE.defineLabel("OEE");
    this.graficaOEE.defineValue(100);
    this.G_OEE = this.graficaOEE.getParameters();

    this.graficaD.defineLabel("D");
    this.graficaD.defineValue(100);
    this.G_D = this.graficaD.getParameters();

    this.graficaR.defineLabel("R");
    this.graficaR.defineValue(100);
    this.G_R = this.graficaR.getParameters();

    this.graficaC.defineLabel("C");
    this.graficaC.defineValue(100);
    this.G_C = this.graficaC.getParameters();
  }

  define_graficas() {
    const width = this.contenedor_graficas ? (this.contenedor_graficas.getBoundingClientRect().width / 4) : undefined;
    const height = 200;
    if (width && height) {
      this.graficaOEE.defineLabel("OEE");
      this.graficaOEE.defineValue(100);
      this.graficaOEE.defineSize(width+40, height+40);
      this.G_OEE = this.graficaOEE.getParameters();

      this.graficaD.defineLabel("D");
      this.graficaD.defineValue(100);
      this.graficaD.defineSize(width-14, height-14);
      this.G_D = this.graficaD.getParameters();

      this.graficaR.defineLabel("R");
      this.graficaR.defineValue(100);
      this.graficaR.defineSize(width-14, height-14);
      this.G_R = this.graficaR.getParameters();

      this.graficaC.defineLabel("C");
      this.graficaC.defineValue(100);
      this.graficaC.defineSize(width-14, height-14);
      this.G_C = this.graficaC.getParameters();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.define_graficas();
  }
}
