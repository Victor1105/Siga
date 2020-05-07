import { Estudiantes } from './estudiantes.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

//DATA SERVICES
//@Injectable para inyectar un servicio dentro de otro
@Injectable()
export class PersonasServices{
    
    estudiantes: Estudiantes[] = [
        new Estudiantes("Veli","34","salico","1234","1234","1234","1234","1234","1234"),
        new Estudiantes("Veli","34","salico","1234","1234","1234","1234","1234","1234"),
    ];

    saludar = new EventEmitter<number>();


    constructor(private loggingService: LoggingService,
                private dataServices: DataServices
                ){} 


    agregarEstudiantesServices(estudiantev: Estudiantes){
      //*  this.loggingService.enviarMensaje("agregando personas: "+estudiantev.nombres);
      
        this.estudiantes.push(estudiantev);
        this.dataServices.guardarEstudiantes(this.estudiantes);
    }

} 