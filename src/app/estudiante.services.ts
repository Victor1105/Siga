import { Estudiantes } from './estudiantes.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

//DATA SERVICES
//@Injectable para inyectar un servicio dentro de otro
@Injectable()
export class EstudianteServices{

    estudiantes: Estudiantes[] = [];

    constructor(private loggingService: LoggingService,
                private dataService: DataServices){}

    setPersonas(estudiantes: Estudiantes[]){
        this.estudiantes = estudiantes;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
    } 

    agregarPersona(estudiantes: Estudiantes){
        this.loggingService.enviaMensajeAConsola("agregamos persona:" + estudiantes.toString());
        if(this.estudiantes == null){
            this.estudiantes = [];            
        }
        this.estudiantes.push(estudiantes);
        this.dataService.guardarPersonas(this.estudiantes);
        //Si se guarda solo un elemento se debe trabajar cada indice y regenerarlos con cada modificacion
        //this.dataService.guardarPersona(persona, this.personas.length);

    }
 
    encontrarPersona(index:number){
        //alert("index: "+index);
        let estudiantes: Estudiantes = this.estudiantes[index];
        this.loggingService.enviaMensajeAConsola("persona encontrada:" + this.estudiantes.toString());
        console.log("estudiantes: "+estudiantes);
        return estudiantes;
    }

    modificarPersona(index:number, estudiantes:Estudiantes){
        this.loggingService.enviaMensajeAConsola("persona a modificar:" + estudiantes.toString() + " con indice:" + index);
        let estudiante1 = this.estudiantes[index];

        estudiante1.nombres = estudiantes.nombres;
        estudiante1.apellidoP = estudiantes.apellidoP;
        estudiante1.apellidoM = estudiantes.apellidoM;
        estudiante1.direccion = estudiantes.direccion;
        estudiante1.edad = estudiantes.edad;
        estudiante1.rut = estudiantes.rut;
        estudiante1.cverificacion = estudiantes.cverificacion;
        estudiante1.email = estudiantes.email;
        estudiante1.telefono = estudiantes.telefono;
        //alert("estudiantes: "+estudiantes);
        this.dataService.modificarPersona(index, estudiantes);

    }

    modificarPersonas(){
        this.loggingService.enviaMensajeAConsola("modificar todas las personas:");
        if(this.estudiantes != null)
            //Guarda todas las personas nuevamente para regenerar indicess
            this.dataService.guardarPersonas(this.estudiantes);
      
    }

    eliminarPersona(index:number){
        let estudiante = this.estudiantes;
        let confirmacion = confirm("Esta Seguro que quiere eliminar este dato?");
        if(confirmacion == true)
        {
            this.loggingService.enviaMensajeAConsola("eliminar persona con indice: " + index); 
            this.estudiantes.splice(index,1);
            this.dataService.eliminarPersona(index);
            //Se vuelven a guardar todas las personas para que coincida el indice con el arreglo en memoria
            this.modificarPersonas();
            alert("Estudiante Eliminado");
        }
    }



} 