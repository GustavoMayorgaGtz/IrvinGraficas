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
import { GraficaLineal } from "../Interfaces";

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


export class LineGraph {
    dataLabels: ApexDataLabels = {
        enabled: true
    }
    stroke: ApexStroke = {
        curve: 'straight'
    }
    series: ApexAxisChartSeries = [{
        name: 'series-1',
        data: [44],
        color: '#C53455',

    }];

    chart: ApexChart = {
        zoom: {
            enabled: true,
            autoScaleYaxis: false,
            type: 'y'
        },
        width: "90%",
        height: "90%",
        type: "line",

    }
    xaxis: ApexXAxis = {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        max: 5,
        labels: {
            show: true,
            style: {
                colors: '#ffffff',
                fontSize: '12px',
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
            fontSize: '14px',
            fontWeight: '400px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#ffffff'
        }
    };

    constructor() {

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


}