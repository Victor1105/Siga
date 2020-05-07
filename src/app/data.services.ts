import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiantes } from './estudiantes.model';
 
@Injectable()
export class DataServices{
    
    constructor(private httpClient: HttpClient){}
    
    //Guardar Estudiante
    guardarEstudiantes(estudiantes: Estudiantes[]){
    
        this.httpClient.put('https://siga-cf823.firebaseio.com/datos.json',estudiantes)
        .subscribe(
            response => console.log("El estudiante se ha guardado correctamente!!."+response),
            error => console.log("Error al guardar Estudiante"+error)
        );
    
    }
 
} 