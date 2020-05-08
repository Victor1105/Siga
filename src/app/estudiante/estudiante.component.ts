import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Injectable } from '@angular/core';
import { Estudiantes } from '../estudiantes.model';
import { ESTUDIANTE_JSON } from '../estudiantes.json';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';
import { REGISTROJSON } from '../registro.json';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})

@Injectable()
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiantes[] =ESTUDIANTE_JSON;

  constructor(private _location: Location,
              private router: Router,
              private dataServices: DataServices) { }

  ngOnInit(): void {
  
  }

  onGuardarEstudiante(nombreInput:HTMLInputElement,apellidoPInput:HTMLInputElement,apellidoMInput:HTMLInputElement,
                      direccionInput:HTMLInputElement, edadInput:HTMLInputElement,rutInput:HTMLInputElement,
                      cvInput:HTMLInputElement,emailInput:HTMLInputElement,telefonoInput:HTMLInputElement){

      let estudiantev = new Estudiantes(nombreInput.value, 
                                        apellidoPInput.value, 
                                        apellidoMInput.value, 
                                        direccionInput.value,
                                        edadInput.value,
                                        rutInput.value,
                                        cvInput.value,
                                        emailInput.value,
                                        telefonoInput.value );
    
      // si el arreglo esta nulo inicializarlo como vacio
      if(this.estudiantes == null){
        this.estudiantes = [];
      }                                        

      this.estudiantes.push(estudiantev);
      console.log("console log this.estudiantes: "+ estudiantev.nombres+" ap paterno:  "+estudiantev.apellidoP);
      //guardar estudiantes
      this.dataServices.guardarEstudiantes(this.estudiantes);
      //redireccionar a la lista de estudiantes
      this.router.navigate(['estudiantes']);
  }



}