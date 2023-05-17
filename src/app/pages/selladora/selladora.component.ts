import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { GraficaRadial } from 'src/app/Interfaces';
import { RadialGraph } from 'src/app/clases/RadialGraph';



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
    this.graficaOEE.defineValue(80);
    this.graficaOEE.defineColors(50, 80, 100);
    this.G_OEE = this.graficaOEE.getParameters();

    this.graficaD.defineLabel("D");
    this.graficaD.defineValue(30);
    this.graficaD.defineColors(50, 80, 100);
    this.G_D = this.graficaD.getParameters();

    this.graficaR.defineLabel("R");
    this.graficaR.defineValue(90);
    this.graficaR.defineColors(50, 80, 100);
    this.G_R = this.graficaR.getParameters();

    this.graficaC.defineLabel("C");
    this.graficaC.defineValue(90);
    this.graficaC.defineColors(50, 80, 100);
    this.G_C = this.graficaC.getParameters();
  }

  define_graficas() {
    const width = this.contenedor_graficas ? (this.contenedor_graficas.getBoundingClientRect().width / 4) : undefined;
    const height = 200;
    if (width && height) {
      this.graficaOEE.defineLabel("OEE");
      this.graficaOEE.defineValue(80);
      this.graficaOEE.defineSize(width+40, height+40);
      // this.graficaOEE.defineSizeFont("25px","25px")
      this.G_OEE = this.graficaOEE.getParameters();

      this.graficaD.defineLabel("D");
      this.graficaD.defineValue(30);
      this.graficaD.defineSize(width-14, height-14);
      // this.graficaD.defineSizeFont("20px","20px")
      this.G_D = this.graficaD.getParameters();

      this.graficaR.defineLabel("R");
      this.graficaR.defineValue(90);
      this.graficaR.defineSize(width-14, height-14);
      // this.graficaR.defineSizeFont("20px","20px")
      this.G_R = this.graficaR.getParameters();

      this.graficaC.defineLabel("C");
      this.graficaC.defineValue(90);
      this.graficaC.defineSize(width-14, height-14);
      // this.graficaC.defineSizeFont("20px","20px")
      this.G_C = this.graficaC.getParameters();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.define_graficas();
  }
}
