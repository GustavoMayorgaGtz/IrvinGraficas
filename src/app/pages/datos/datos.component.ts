import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { setupTestingRouter } from '@angular/router/testing';
import { GraficaLineal, GraficaRadial } from 'src/app/Interfaces';
import { BarGraph } from 'src/app/clases/BarGraph';
import { LineGraph } from 'src/app/clases/LineGraph';
import { RadialGraph } from 'src/app/clases/RadialGraph';



@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss', '../general-style.scss']
})

export class DatosComponent implements OnInit, AfterViewInit {

  @ViewChild('ContenedorGraficas') ContenedorGraficas !: ElementRef<HTMLDivElement>;
  public title!: string;
  public contenedor_graficas!: HTMLDivElement;
  public graficaOEE = new RadialGraph();
  public graficaD = new RadialGraph();
  public graficaR = new RadialGraph();
  public graficaC = new RadialGraph();
  public graficaProcess = new LineGraph();
  public graficaProcessHour = new BarGraph();
  public G_OEE!: GraficaRadial;
  public G_D!: GraficaRadial;
  public G_R!: GraficaRadial;
  public G_C!: GraficaRadial;
  public G_P!: GraficaLineal;
  public G_PH!: GraficaLineal;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    if (this.ContenedorGraficas) {
      this.contenedor_graficas = this.ContenedorGraficas.nativeElement;
      this.define_graficas(40, 14);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const title = params['title'];
      const id = params['id'];
      this.title = title;
    });

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

    this.G_P = this.graficaProcess.getParameters();
    this.G_PH = this.graficaProcessHour.getParameters();
  }

  back() {
    this.router.navigate(['home']);
  }

  public isprint: boolean = false;  
  print_event(){
   this.isprint = !this.isprint;
   this.showLoading = !this.isprint;
  }

  public showLoading: boolean = false;
  save_data(option: string){
    this.showLoading = true;
    // option "excel" or "pdf"
    setTimeout(() => {
      switch(option){
        case 'pdf':{
          alert("PDF guardado.");
          this.isprint= false;  
          break;
        }
        case 'excel':{
          alert("Excel guardado.");
          this.isprint= false;
          break;
        }
      }
    }, 3000);
 
  }

  define_graficas(w1: number, w2: number) {
    const width = this.contenedor_graficas ? (this.contenedor_graficas.getBoundingClientRect().width / 4) : undefined;
    const height = 200;
    if (width && height) {
      this.graficaOEE.defineLabel("OEE");
      this.graficaOEE.defineValue(80);
      this.graficaOEE.defineSize(width + w1, height + w1);
      // this.graficaOEE.defineSizeFont("25px","25px")
      this.G_OEE = this.graficaOEE.getParameters();

      this.graficaD.defineLabel("D");
      this.graficaD.defineValue(30);
      this.graficaD.defineSize(width - w2, height - w2);
      // this.graficaD.defineSizeFont("20px","20px")
      this.G_D = this.graficaD.getParameters();

      this.graficaR.defineLabel("R");
      this.graficaR.defineValue(90);
      this.graficaR.defineSize(width - w2, height - w2);
      // this.graficaR.defineSizeFont("20px","20px")
      this.G_R = this.graficaR.getParameters();

      this.graficaC.defineLabel("C");
      this.graficaC.defineValue(90);
      this.graficaC.defineSize(width - w2, height - w2);
      // this.graficaC.defineSizeFont("20px","20px")
      this.G_C = this.graficaC.getParameters();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.define_graficas(40, 14);
  }
}
