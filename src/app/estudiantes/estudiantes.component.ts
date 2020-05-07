import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Estudiantes } from '../estudiantes.model';
import { ESTUDIANTE_JSON } from '../estudiantes.json';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DataServices} from '../data.services';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
//Decorador para Emitir el objeto guardado
  @Output() estudianteCreado = new EventEmitter<Estudiantes>();
 /*
    @ViewChild('nombreInput') nombreInput : ElementRef;
    @ViewChild('apellidoPInput') apellidoPInput : ElementRef;
    @ViewChild('apellidoMInput') apellidoMInput : ElementRef;
    @ViewChild('direccionInput') direccionInput : ElementRef;
    @ViewChild('edadInput') edadInput : ElementRef;
    @ViewChild('rutInput') rutInput : ElementRef;
    @ViewChild('cvInput') cvInput : ElementRef;
    @ViewChild('emailInput') emailInput : ElementRef;
    @ViewChild('telefonoInput') telefonoInput : ElementRef;
  */
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
  closeResult: string;

  private Url = 'https://siga-cf823.firebaseio.com/datos.json';


  constructor(private modalService: NgbModal,
              private estudiante_servicio: DataServices,
              private httpcliente: HttpClient) { }

  ngOnInit(): void {    

      this.httpcliente.get<Estudiantes[]>(this.Url);
      this.estudiantes = ESTUDIANTE_JSON;
    //this.estudiantes = this.httpcliente.get<Estudiantes[]>(this.heroesUrl);
    //return this.httpcliente.get<Estudiantes[]>(this.heroesUrl);
  }
  


  onAgregarEstudiante(nombreInput:HTMLInputElement,
                      apellidoPInput:HTMLInputElement,
                      apellidoMInput:HTMLInputElement, 
                      direccionInput:HTMLInputElement, 
                      edadInput:HTMLInputElement, 
                      rutInput:HTMLInputElement, 
                      cvInput:HTMLInputElement, 
                      emailInput:HTMLInputElement, 
                      telefonoInput:HTMLInputElement){
   

      let estudianteJson = new Estudiantes( nombreInput.value, 
                                            apellidoPInput.value, 
                                            apellidoMInput.value, 
                                            direccionInput.value,
                                            edadInput.value,
                                            rutInput.value,
                                            cvInput.value,
                                            emailInput.value,
                                            telefonoInput.value                                           
                                           );  

      this.estudiantes.push(estudianteJson);
      this.estudiante_servicio.guardarEstudiantes(this.estudiantes);



    }

}
