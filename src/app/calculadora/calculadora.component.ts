import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  
  @Output() resultadoSuma = new EventEmitter<number>();
  
  titulo: string = "CALCULADORA [COMPONENTE]";
  operandoA: number;
  operandoB: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSumar():void{
    let resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultado);
  }



}
