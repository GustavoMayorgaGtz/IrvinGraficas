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

    defineColors(r1:number=20,am1:number=50,am2:number=70,v1:number=80){
        this.fill={
            type: "gradient",
            gradient: {
              shade: "dark",
              shadeIntensity: 0.4,
              inverseColors: false,
              opacityFrom: .7,
              opacityTo: 1,
              type: "horizontal",
              colorStop: this.generacolor(r1,am1,am2,v1,this.series),
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
    generacolor(r1:number,am1:number,am2:number,v1:number,porcentaje:any){
      var colors=[{}];
      if(porcentaje>0 && porcentaje<=r1){
        return colors=[
          {
            offset: 0,
            color: "#e32e2e",
            opacity: 1
          }
        ]
      }else{
        if(porcentaje>r1 && porcentaje<=am1){
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
          if(porcentaje>am1 && porcentaje<=am2){
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
            if(porcentaje>am2 && porcentaje<=v1){
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
              if(porcentaje>v1 && porcentaje<=100){
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