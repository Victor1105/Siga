import { Component, OnInit } from '@angular/core';
//import { Horario } from './horario';
import { HORARIOS } from './horario.json';
import { HorarioService } from './horario.service';
import { HORARIOJSON } from '../horario.json';
import { Horario } from '../horario.model';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  horario: Horario[];

  /*HORARIOS: Horario[] = [
    {hora: '8:15 - 10:00', lunes: 'Matematicas', martes: 'Ciencias Naturales', miercoles: 'Educación Física', jueves: 'Biología', viernes: 'Artes Manuales'},
    {hora: '10:00 - 12:30', lunes: 'Lenguaje', martes: 'Física', miercoles: 'Lenguajes', jueves: 'Historia', viernes: 'Inglés'},
    {hora: '12:30 - 13:30', lunes: 'Historia', martes: 'Inglés', miercoles: 'Historia', jueves: 'Matemáticas', viernes: 'Lenguaje'},

  ];
  */

  //registrojson: Usuarios[];
  horariojson: Horario[];

  constructor() { }

  ngOnInit(): void {
   // this.horario = this.horarioservice.getHorario();
   this.horariojson = HORARIOJSON;
  }

}
