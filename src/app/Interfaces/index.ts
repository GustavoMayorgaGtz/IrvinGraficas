import { AbstractControl, FormGroup } from "@angular/forms";
import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke } from "ng-apexcharts";

//-----------------------------------------
//Interfaz utilizada en pagina de login para formulario y creacion de variables
export interface login{
    username: string;
    password: string;
} 

export interface loginForm extends FormGroup{
    value: login,
    controls: {
        username: AbstractControl<any>,
        password: AbstractControl<any>,
    }
}

//-----------------------------------------
//Interfaz creada para las graficas radiales creadas con clase
export interface GraficaRadial {
    series: ApexNonAxisChartSeries,
    chart: ApexChart,
    labels: string[],
    plotOptions: ApexPlotOptions,
    fill: ApexFill,
    stroke: ApexStroke
}
//-----------------------------------------