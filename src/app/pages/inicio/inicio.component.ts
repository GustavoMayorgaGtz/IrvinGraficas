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
  styleUrls: ['./inicio.component.scss','../general-style.scss']
})

export class InicioComponent implements OnInit {
  ngOnInit(): void {
  }
  serie:ApexNonAxisChartSeries = [100];// [Number((Math.random()*100).toFixed(2))];
  chartRadialBar:ApexChart = {
    zoom: {
      enabled: true,
      autoScaleYaxis: false,
      type: 'x'
    },
    width: "100%",
    height: "100%",
    type: "radialBar",
    offsetY: 30,
    };
  
  plotOptions: ApexPlotOptions= {
    radialBar: {
      startAngle: -80,
      endAngle: 80,
      track:{
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
  labels: string[]=  ["OEE"];  
  fill:any = {
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: .7,
      opacityTo: 1,
      type: "horizontal",
      colorStops: this.definircolor(this.serie)
    }
  }
  definircolor(porcentaje:any){
    var colors=[{}];
    if(porcentaje>0 && porcentaje<=20){
      return colors=[
        {
          offset: 0,
          color: "#e32e2e",
          opacity: 1
        }
      ]
    }else{
      if(porcentaje>20 && porcentaje<=50){
        colors= [
          {
            offset: 0,
            color: "#e32e2e",
            opacity: 1
          }
        ,
          {
            offset: 20,
            color: "#f0b300",
            opacity: 1
          },
          {
            offset: 60,
            color: "#eaca00",
            opacity: 1
          },
          {
            offset: 100,
            color: "#e1e110",
            opacity: 1
          }
        ]
      }else{
        if(porcentaje>50 && porcentaje<=70){
          colors= [
            {
              offset: 0,
              color: "#e32e2e",
              opacity: 1
            }
          ,
            {
              offset: 25,
              color: "#f0b300",
              opacity: 1
            },
            {
              offset: 50,
              color: "#eaca00",
              opacity: 1
            },
            {
              offset: 75,
              color: "#e1e110",
              opacity: 1
            },
            {
              offset: 100,
              color: "#cbdc1a",
              opacity: 1
            }
          ]
        }else{
          if(porcentaje>70 && porcentaje<=80){
            colors= [
              {
                offset: 0,
                color: "#e32e2e",
                opacity: 1
              }
            ,
              {
                offset: 20,
                color: "#f0b300",
                opacity: 1
              },
              {
                offset: 40,
                color: "#eaca00",
                opacity: 1
              },
              {
                offset: 60,
                color: "#e1e110",
                opacity: 1
              },
              {
                offset: 80,
                color: "#cbdc1a",
                opacity: 1
              },
              {
                offset: 100,
                color: "#a0d12d",
                opacity: 1
              }
            ]

          }else{
            if(porcentaje>80 && porcentaje<=100){
             colors=[
                {
                  offset: 0,
                  color: "#e32e2e",
                  opacity: 1
                }
              ,
                {
                  offset: 20,
                  color: "#f0b300",
                  opacity: 1
                },
                {
                  offset: 40,
                  color: "#eaca00",
                  opacity: 1
                },
                {
                  offset: 50,
                  color: "#e1e110",
                  opacity: 1
                },
                {
                  offset: 60,
                  color: "#cbdc1a",
                  opacity: 1
                },
                {
                  offset: 80,
                  color: "#a0d12d",
                  opacity: 1
                },
                {
                  offset: 100,
                  color: "#4ab64a",
                  opacity: 1
                }
              ]
            }
          }
        }
      }
    }
    return colors;
  }
}

