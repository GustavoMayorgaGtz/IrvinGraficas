import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke
} from "ng-apexcharts";




@Component({
  selector: 'app-selladora',
  templateUrl: './selladora.component.html',
  styleUrls: ['./selladora.component.scss', '../general-style.scss']
})
export class SelladoraComponent implements OnInit {
  series: ApexNonAxisChartSeries = [75]


  chart: ApexChart = {
    height: 350,
    type: "radialBar",
    toolbar: {
      show: true
    }
  }

  labels: string[] = ["Percent"]
   
  plotOptions: ApexPlotOptions = {
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

  fill: ApexFill = {
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

  stroke: ApexStroke = {
    lineCap: "round"
    }

    
    
    


  constructor() {

    }

  ngOnInit(): void {

    }
  }
