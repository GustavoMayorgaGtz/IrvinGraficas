import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexLegend
} from "ng-apexcharts";
import { GraficaLineal, randomData } from "../Interfaces";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    title: ApexTitleSubtitle;
    labels: string[];
    legend: ApexLegend;
    subtitle: ApexTitleSubtitle;
};


export class BarGraph {
    dataLabels: ApexDataLabels = {
        
        enabled: false
    }
    stroke: ApexStroke = {
        colors: ["rgb(39, 111, 187)"],
        curve: 'stepline'
    }
    series: ApexAxisChartSeries = [{
        name: 'series-1',
        data: [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],
        color: '#349ec5',

    }];

    chart: ApexChart = {
        zoom: {
            enabled: true,
            autoScaleYaxis: false,
            type: 'y'
        },
        width: "90%",
        height: "90%",
        type: "bar",
    }
    xaxis: ApexXAxis = {
        categories: [],
        max: 30,
        labels: {
            show: true,
            style: {
                colors: '#0000000',
                fontSize: '10px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400
            }
        }
    }

    yaxis: ApexYAxis = {
        show: true,
        labels: {
            style: {
                colors: '#ffffff',
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400
            }
        }
    }
    title: ApexTitleSubtitle = {
        text: "Titulo",
        align: 'center',
        style: {
            fontSize: '16px',
            fontWeight: '400px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#000000'
        }
    };

    constructor() {
        this.randomData_Event();
    }

    //Define la etiqueta de titulo para que tiene la grafica
    defineLabel() {

    }

    //Regresa una copia de la informacion para poder ser utilizada en el componente apex-chart
    getParameters() {
        const dataLabels = this.dataLabels;
        const stroke = this.stroke;
        const series = this.series;
        const chart = this.chart;
        const xaxis = this.xaxis;
        const yaxis = this.yaxis;
        const title = this.title;

        const linearGraph: GraficaLineal = {
            dataLabels, stroke, series, chart, xaxis, yaxis, title
        }
        return linearGraph;
    }


    public randomData: randomData = {
        data: [],
        labels: []
    };
    randomData_Event(){
        //Contamos de prueba con 4 horas

        for(let i = 0; i < 4; i++){
            const time = new Date();
           this.randomData.data.push(parseInt((Math.random() * 1000).toString()));
           const hour = time.getHours().toString() 
           const minute = time.getMinutes().toString();
           const second = time.getSeconds().toString();
        //    const timeOutput = hour +":"+minute+":"+second+"hrs";
           
           this.randomData.labels.push((i+1).toString()+":00 hrs");
        }
        this.series[0].data = this.randomData.data;
        this.xaxis.categories = this.randomData.labels;
    }


}