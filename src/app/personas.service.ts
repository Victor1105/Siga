import { Usuarios } from './usuarios.model';
import { LoggingService } from './LoggingService.service';
import { Injectable, EventEmitter } from '@angular/core';

//DATA SERVICES
//@Injectable para inyectar un servicio dentro de otro
@Injectable()
export class PersonasServices{
    
    saludar = new EventEmitter<number>();

    usuarios: Usuarios[] = [
        new Usuarios("Veli","34","salico","1234"),
        new Usuarios("Rodrigo","33","Docra","4321")
    ];

    constructor(private loggingService: LoggingService){

    }

    agregarUsuarios(usuarioss: Usuarios){
        this.loggingService.enviaMensajeAConsola("agregando personas: "+usuarioss.nombre+" "+usuarioss.edad);
        this.usuarios.push(usuarioss);
    }

    
}