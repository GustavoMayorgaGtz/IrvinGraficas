import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ApexStroke,
    ChartComponent
  } from "ng-apexcharts";

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
        stops: [0, 100]
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

    defineColors(){
        
    }

    getParameters(){
        const series = this.series;
        const chart = this.chart;
        const plotOptions = this.plotOptions;
        const labels = this.labels;
        const stroke = this.stroke;
        const fill = this.fill;
       return { series, chart, plotOptions, labels, stroke, fill }
    }
}