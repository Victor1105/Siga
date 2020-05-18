import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Estudiantes } from '../estudiantes.model';
import { ESTUDIANTE_JSON } from '../estudiantes.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataServices} from '../data.services';
import { EstudianteServices} from '../estudiante.services';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from '../LoggingService.service';



import {HttpClient } from '@angular/common/http';
//import { REGISTROJSON } from '../registro.json';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiantes[] = [];

  constructor(private loggingService: LoggingService,
              private dataService: DataServices,
              private estudiantesService: EstudianteServices,
              private router: Router,
              private route:ActivatedRoute
              ) { } 

  ngOnInit(): void { 
    
    this.estudiantesService.obtenerPersonas()
    .subscribe(
      (estudiantes: Estudiantes[]) => {
        //Cargamos los datos de la base de datos al arreglo de personas local 
        this.estudiantes = estudiantes;
        this.estudiantesService.setPersonas(this.estudiantes);
        console.log("obtener personas suscriber:" + this.estudiantes);
      }
    );          
  }


  irAgregar(){
    console.log("nos vamos a agregar ");
    this.router.navigate(['./estudiante/agregar'],{queryParams:{modoEdicion:0}});
  }


}
