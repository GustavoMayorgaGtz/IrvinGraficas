import { Component, Input, OnInit } from '@angular/core';
import { causal, generatable, tableMerma } from 'src/app/Interfaces';

@Component({
  selector: 'detalle-merma',
  templateUrl: './detalle-merma.component.html',
  styleUrls: ['./detalle-merma.component.scss','../../pages/general-style.scss']
})
export class DetalleMermaComponent implements OnInit{
public datos:any[]=generatable();
constructor(){

}
public causales: causal[] = [];
public noCausal: number[] = [];
  ngOnInit(): void {
 console.log("EStos son los datos",this.datos);
    //  this.datos.forEach(element => {
    //   let contador = 0;
    //      element.Causales.forEach((item) => {
    //       contador++;
    //       this.causales.push(item)
    //      })
    //      this.noCausal.push(contador);
    //  });
  }
}
