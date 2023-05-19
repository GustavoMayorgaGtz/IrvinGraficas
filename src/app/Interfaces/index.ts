import { AbstractControl, FormGroup } from "@angular/forms";
import { ApexChart, ApexFill, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke } from "ng-apexcharts";

//-----------------------------------------
//Interfaz utilizada en pagina de login para formulario y creacion de variables
export interface login {
    username: string;
    password: string;
}

export interface loginForm extends FormGroup {
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

/////Interfaces y funciones para los ejemplos de vistas -----------------------
export interface causal{
    id: number,
    Nombre: string,
    SAP: number,
    Notas: string
}
export interface tableMerma {
    Descripcion: string,
    Causales: causal[],
}
export function generatable() {
    let id = 0;
    var arr = [
        // {
        //     Descripcion: "Descripcion",
        // Causales: [
        //     {
        //         id: ++id,
        //         Nombre: "Causales de Merma",
        //         SAP: "SAP",
        //         Notas: "Notas"
        //     }
        // ]
        // },
        {
        Descripcion: "Cartón en tira por envoltura de rollos",
        Causales: [
            {
                id: ++id,
                Nombre: "Cartón en tira por envoltura de rollos",
                SAP: 0,
                Notas: "mmm"
            }
        ]
    },
    {
        Descripcion: "Envase en cuadro por empalme de rollos",
        Causales: [
            {
                id: ++id,
                Nombre: "Envase en cuadro por empalme de rollos",
                SAP: 0,
                Notas: "mmm"
            }
        ]
    },
    {
        Descripcion: "Envase en cuadro por arraque no controlado",
        Causales: [
            {
                id: ++id,
                Nombre: "Cambio de producto",
                SAP: 0,
                Notas: "mmm"
            },
            {
                id: ++id,
                Nombre: "Mala calidad de tinta",
                SAP: 0,
                Notas: "mmm"
            },
            {
                id: ++id,
                Nombre: "Limpieza de placas y rodillo",
                SAP: 0,
                Notas: "mmm"
            }, {
                id: ++id,
                Nombre: "Pruebas de máquina",
                SAP: 0,
                Notas: "mmm"
            },
            {
                id: ++id,
                Nombre: "Pruebas de consumibles",
                SAP: 0,
                Notas: "mmm"
            },
            {
                id: ++id,
                Nombre: "Pruebas de producto nuevo",
                SAP: 0,
                Notas: "mmm"
            }, {
                id: ++id,
                Nombre: "Falla en barniz",
                SAP: 0,
                Notas: "mmm"
            }, {
                id: ++id,
                Nombre: "Arranque de máquina",
                SAP: 0,
                Notas: "mmm"
            }, {
                id: ++id,
                Nombre: "Cambio de piezas",
                SAP: 0,
                Notas: "mmm"
            }, {
                id: ++id,
                Nombre: "Liberación de cabezal",
                SAP: 0,
                Notas: "mmm"
            }, {
                id: ++id,
                Nombre: "Ajuste de tintas",
                SAP: 0,
                Notas: "mmm"
            }, {
                id: ++id,
                Nombre: "Defecto de placas",
                SAP: 0,
                Notas: "mmm"
            }
        ]
    },
    {
        Descripcion: "Envase en cuadro por arranque controlado",
        Causales: [
            {
                id: ++id,
                Nombre: "Ajuste de impresión por uso regular de placas",
                SAP: 0,
                Notas: "mmm"
            },
            {
                id: ++id,
                Nombre: "Cambio de placa",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Ajuste de abhesivos",
                SAP: 0,
                Notas: "mmm"
            }]
    },
    {
        Descripcion: "Desperdicio de carton en cuadro por problemas de calidad de prensa",
        Causales: [
            {
                id: ++id,
                Nombre: "Falla de desenrollador",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla de alineador",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla sistema de empalme",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla en acumulador",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla en unidades de impresión",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla en unidad de abhesivo",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla en quemadores",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla en convertidora",
                SAP: 0,
                Notas: "mmm"
            },{
                id: ++id,
                Nombre: "Falla en apiladoras",
                SAP: 0,
                Notas: "mmm"
            }]
    },
    {
        Descripcion: "Envase en cuadro por inspección de proceso",
        Causales: [
            {
                id: ++id,
                Nombre: "Pruebas de calidad y testigos",
                SAP: 0,
                Notas: "mmm"
            }]
    },
    {
        Descripcion: "Desperdicio de cartón por rollos golpeteados internamente",
        Causales: [
            {
                id: ++id,
                Nombre: "Golpe a rollo externo o interno",
                SAP: 0,
                Notas: "mmm"
            }]
    },
    {
        Descripcion: "Desperdicio de cartón en cuadro por calidad de extrusión",
        Causales: [
            {
                id: ++id,
                Nombre: "Problemas de extrusión (pegados, medias lunas, angostos, tiras de poly, mala adhesión, etc.) ", 
                SAP: 0,
                Notas: "mmm"
            }]
    },
     {
        Descripcion: "Desperdicio de cartón en tira por calidad de extrusión",
        Causales: [
            {
                id: ++id,
                Nombre: "Problemas de extrusión (pegados en carrete.recuperados) ",
                SAP: 0,
                Notas: "mmm"
            }]
    },{
            Descripcion: "Otros",
            Causales: [
                {
                    id: ++id,
                    Nombre: "Bote de basura",
                    SAP: 0,
                    Notas: "mmm"
                }]
    }
] 
    return arr;
}