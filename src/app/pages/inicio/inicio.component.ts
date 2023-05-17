import { Component, OnInit } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexResponsive,
  ApexDataLabels,
  ApexStroke,
  ApexPlotOptions,
  ApexFill,
  ApexNonAxisChartSeries
} from "ng-apexcharts";


export type ChartOptions = {
  serie: ApexNonAxisChartSeries;
  chart: ApexChart;
  chartRadialBar: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  fill: any;
  series: ApexAxisChartSeries;
  labels: string[];
  dataLabelsRadial: ApexDataLabels;
};
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss', '../general-style.scss']
})

export class InicioComponent implements OnInit {
  ngOnInit(): void {
  }
  serie: ApexNonAxisChartSeries = [30]//[Number((Math.random()*100).toFixed(2))];
  chartRadialBar: ApexChart = {
    zoom: {
      enabled: true,
      autoScaleYaxis: false,
      type: 'x'
    },
    width: "100%",
    height: "100%",
    type: "radialBar",
    offsetY: 40,
  };

  plotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#ABB2B9",
        strokeWidth: "100%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.05
        }
      },
      hollow: {
        size: "70%",

      },
      dataLabels: {
        show: true,
        name: {
          offsetY: 10,
          show: true,
          color: "#000000",
          fontSize: "calc(10px + 1vw)"
        },
        value: {
          offsetY: -30,
          color: "#000000",
          fontSize: "calc(10px + 1vw)",
          show: true
        }
      }
    }

  };
  labels: string[] = ["OEE"];
  fill: any = {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: .7,
      opacityTo: 1,
      type: "horizontal",
      colorStops: this.definircolor(20, 20, 60, 100)
    }
  }
  definircolor(value: number, min: number, inter: number, max: number) {
    let color1 = "#448b2f", color2 = "#4fbb2e";

    if (value <= min) {
      color1 = "#e70e0e";
      color2 = "#ff0d0d";
    }
    if (value > min && value <= inter) {
      color1 = "#f5f519";
      color2 = "#ffff09";
    }
    if (value > inter && value <= max) {
      color1 = "#147e14";
      color2 = "#4fbb2e";
    }
    return [{
      offset: 0,
      color: color1,
      opacity: 1
    },
    {
      offset: 100,
      color: color2,
      opacity: 1
    }];
  }
}

