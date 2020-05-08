import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Estudiantes } from '../estudiantes.model';
import { ESTUDIANTE_JSON } from '../estudiantes.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices} from '../data.services';
import {HttpClient } from '@angular/common/http';
//import { REGISTROJSON } from '../registro.json';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  nombreInput: string;
  apellidoPInput: string;
  apellidoMInput: string;
  direccionInput: string;
  edadInput: number;
  rutInput: number;
  cvInput: number;
  emailInput: string;
  telefonoInput: number;

 
  estudiantes: Estudiantes[];

  constructor(private dataService: DataServices,
              private httpcliente: HttpClient) { }

  ngOnInit(): void {    
    
    
    this.dataService.cargarEstudiante()
    .subscribe(
          (estudiantes: Estudiantes[]) => {
            this.estudiantes = estudiantes;
            this.dataService.setEstudiantes(this.estudiantes);
          }
    );


  }
  




}
