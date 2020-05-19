import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Injectable } from '@angular/core';
import { Estudiantes } from '../estudiantes.model';
import { ESTUDIANTE_JSON } from '../estudiantes.json';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServices } from '../data.services';
import { REGISTROJSON } from '../registro.json';
import { EstudianteServices} from '../estudiante.services';
import { LoggingService } from '../LoggingService.service';



@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})

@Injectable()
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiantes[] =ESTUDIANTE_JSON;

  nombreInput:string;
  apellidoPInput:string;
  apellidoMInput:string;
  direccionInput:string;
  edadInput:string;
  rutInput:string;
  cvInput:string;
  emailInput:string;
  telefonoInput:string;
  index: number;

  //Agregar el modo edición
  
  modoEdicion:number;

  

  constructor(private _location: Location,
              private loggingService: LoggingService,
              private router: Router,
              private dataServices: DataServices,
              private estudianteServices: EstudianteServices,
              //servicio para recuperar un elemento seleccionado
              private route: ActivatedRoute) {

              

               }

  ngOnInit(): void {
    
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion!= null && this.modoEdicion == 1){
      let estudiantes:Estudiantes = this.estudianteServices.encontrarPersona(this.index);
      if(estudiantes != null){
       // alert("existe el objeto");
        //Cargamos los valores en el formulario solo si hay un index (un registro a editar)
        this.nombreInput = estudiantes.nombres;
        this.apellidoPInput = estudiantes.apellidoP;
        this.apellidoMInput = estudiantes.apellidoM;
        this.direccionInput = estudiantes.direccion;
        this.edadInput = estudiantes.edad;
        this.rutInput = estudiantes.rut;
        this.cvInput = estudiantes.cverificacion;
        this.emailInput = estudiantes.email;
        this.telefonoInput = estudiantes.telefono;

      }
    }
  }

  onGuardarPersona(){
    if(this.nombreInput != null &&
       this.apellidoPInput != null && 
       this.apellidoMInput != null && 
       this.direccionInput != null && 
       this.edadInput != null && 
       this.rutInput != null && 
       this.cvInput != null && 
       this.emailInput != null && 
       this.telefonoInput != null){     


      let estudiante1:Estudiantes = new Estudiantes(this.nombreInput, this.apellidoPInput, this.apellidoMInput, this.direccionInput, this.edadInput, this.rutInput, this.cvInput, this.emailInput, this.telefonoInput);

      if(this.modoEdicion!= null && this.modoEdicion == 1)
        {
          this.estudianteServices.modificarPersona(this.index, estudiante1);
        }
        else
        {
          //alert("estudiante agregar: "+ estudiante1);
          this.estudianteServices.agregarPersona(estudiante1);
        
        }
      this.loggingService.enviaMensajeAConsola("persona agregada/modificada:" + estudiante1.toString());
      this.router.navigate(['estudiantes']);
    }
    else{//si no tiene datos no hace nada se queda en el mismo lugar
      alert("Necesita Rellenar Todos los campos del Formulario!");  
      //return;
    }

  }

  onEliminarPersona(){
    if(this.index != null){
      this.estudianteServices.eliminarPersona(this.index)
    }
    this.router.navigate(['estudiantes']);
  }


}