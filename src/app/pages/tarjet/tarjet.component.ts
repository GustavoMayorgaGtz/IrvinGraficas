import { Component, Input, OnInit, ViewChild } from '@angular/core';

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
  serie2: ApexNonAxisChartSeries;
  chart: ApexChart;
  chartRadialBar: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  series: ApexAxisChartSeries;
  labels: string[];
  dataLabelsRadial: ApexDataLabels;
};


@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrls: ['./tarjet.component.scss']
})

export class TarjetComponent implements OnInit {

/****************Radial Bar default options */
series2:ApexNonAxisChartSeries = [90];
chartRadialBar:ApexChart = {
  zoom: {
    enabled: true,
    autoScaleYaxis: false,
    type: 'y'
  },
  width: "100%",
  height: "100%",
  type: "radialBar",
  offsetY: 40
  };

plotOptions: ApexPlotOptions= {
  radialBar: {
    startAngle: -135,
    endAngle: 225,
    track:{
      background: "#ABB2B9",
      strokeWidth: "100%",
      margin: 0, // margin is in pixels
      dropShadow: {
        enabled: false,
        top: -3,
        left: 0,
        blur: 4,
        opacity: 0.24
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
        color: "#ccc",
        fontSize: "calc(10px + 1vw)",
        show: true
      }
    }
  }

};
labels: string[]=  ["OEE"];
fill: ApexFill = {
  type: "solid",
  gradient: {
    gradientToColors: ["#ABE5A1"],
    shade: "dark",
    shadeIntensity: 0.4,
    inverseColors: false,
    opacityFrom: .7,
    opacityTo: 1,
    stops: [0, 50,100]
  }
};

  ngOnInit(): void {
   
  }
}
