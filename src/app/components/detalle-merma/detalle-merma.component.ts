import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'detalle-merma',
  templateUrl: './detalle-merma.component.html',
  styleUrls: ['./detalle-merma.component.scss']
})
export class DetalleMermaComponent implements OnInit{
@Input() Entrada!: string;

constructor(){

}
  ngOnInit(): void {
    console.log(this.Entrada)
  }
}
