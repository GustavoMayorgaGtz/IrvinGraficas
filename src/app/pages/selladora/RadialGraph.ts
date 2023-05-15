import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ApexStroke,
    ChartComponent
  } from "ng-apexcharts";
import { GraficaRadial } from "src/app/Interfaces";

export class RadialGraph{

    public series: ApexNonAxisChartSeries = [75]

    public chart: ApexChart = {
      width: "100%",
      height: "100%",
      type: "radialBar",
      toolbar: {
        show: false
      }
    }
  
    public labels: string[] = ["OEE"]
  
    public plotOptions: ApexPlotOptions = {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },
  
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px"
          },
          value: {
            formatter: function (val) {
              return parseInt(val.toString(), 10).toString();
            },
            color: "#111",
            fontSize: "36px",
            show: true
          }
        }
      }
    }
  
    public fill: ApexFill = {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStop: [{}]
      }
    } 
  
    public stroke: ApexStroke = {
      lineCap: "round"
    }

    
    constructor(){
    }
    
    //Define la etiqueta de titulo para que tiene la grafica
    defineLabel(label: string){
        this.labels = [label];
    }

    //Define el valor porcentual de la grafica
    defineValue(value: number){
       this.series = [value];
    }

    defineSize(width: number|string, height: number|string){
        this.chart = {
            width: width,
            height: height,
            type: "radialBar",
            toolbar: {
              show: false
            }
          }
    }

    getParameters(){
        const series = this.series;
        const chart = this.chart;
        const plotOptions = this.plotOptions;
        const labels = this.labels;
        const stroke = this.stroke;
        const fill = this.fill;
        const radialGraph: GraficaRadial = {
          series, chart, plotOptions, labels, stroke, fill
        }
       return radialGraph;
    }
    
    defineColors(value: number, min: number, inter: number, max: number) {
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