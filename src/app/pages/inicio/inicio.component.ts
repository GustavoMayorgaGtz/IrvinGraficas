import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { GraficaRadial } from 'src/app/Interfaces';
import { RadialGraph } from 'src/app/clases/RadialGraph';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss', '../general-style.scss']
})

export class InicioComponent implements OnInit {



  constructor(private router: Router) {

  }

  public grafica1! : GraficaRadial;
  ngOnInit(): void {
    let grafica1 = new RadialGraph();
    grafica1.defineLabel("OEE");
    grafica1.defineValue(80);
    grafica1.defineColors(50, 80, 100);
    this.grafica1 = grafica1.getParameters();
  }

  public filter_state: string = "./assets/grid.png";
  public container_cards_className: string = "container-cards-slim";
  change_view() {
    if (this.filter_state === './assets/grid.png') {
      this.filter_state = './assets/square.png';
      this.container_cards_className = "container-cards";
    } else {
      this.filter_state = './assets/grid.png'
      this.container_cards_className = "container-cards-slim";
    }
  }

  open_selladora_event(title: string, id: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        title,
        id
      }
    }
    this.router.navigate(['/selladora'], navigationExtras);
  }

  // serie: ApexNonAxisChartSeries = [100]//[Number((Math.random()*100).toFixed(2))];
  // chartRadialBar: ApexChart = {
  //   zoom: {
  //     enabled: true,
  //     autoScaleYaxis: false,
  //     type: 'x'
  //   },
  //   width: "100%",
  //   height: "100%",
  //   type: "radialBar",
  //   offsetY: 40,
  // };

  // plotOptions: ApexPlotOptions = {
  //   radialBar: {
  //     startAngle: -90,
  //     endAngle: 90,
  //     track: {
  //       background: "#ABB2B9",
  //       strokeWidth: "100%",
  //       margin: 0, // margin is in pixels
  //       dropShadow: {
  //         enabled: true,
  //         top: -3,
  //         left: 0,
  //         blur: 4,
  //         opacity: 0.05
  //       }
  //     },
  //     hollow: {
  //       size: "70%",

  //     },
  //     dataLabels: {
  //       show: true,
  //       name: {
  //         offsetY: 10,
  //         show: true,
  //         color: "#000000",
  //         fontSize: "calc(10px + 1vw)"
  //       },
  //       value: {
  //         offsetY: -30,
  //         color: "#000000",
  //         fontSize: "calc(10px + 1vw)",
  //         show: true
  //       }
  //     }
  //   }

  // };
  // labels: string[] = ["OEE"];
  // fill: any = {
  //   type: "gradient",
  //   gradient: {
  //     shade: "dark",
  //     shadeIntensity: 0.4,
  //     inverseColors: false,
  //     opacityFrom: .7,
  //     opacityTo: 1,
  //     type: "horizontal",
  //     colorStops: this.definircolor(100, 20, 60, 100)
  //   }
  // }
  // definircolor(value: number, min: number, inter: number, max: number) {
  //   let color1 = "#448b2f", color2 = "#4fbb2e";

  //   if (value <= min) {
  //     color1 = "#e70e0e";
  //     color2 = "#ff0d0d";
  //   }
  //   if (value > min && value <= inter) {
  //     color1 = "#f5f519";
  //     color2 = "#ffff09";
  //   }
  //   if (value > inter && value <= max) {
  //     color1 = "#147e14";
  //     color2 = "#4fbb2e";
  //   }
  //   return [{
  //     offset: 0,
  //     color: color1,
  //     opacity: 1
  //   },
  //   {
  //     offset: 100,
  //     color: color2,
  //     opacity: 1
  //   }];
  // }
}


