import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudiantes } from './estudiantes.model';
import { LoginService } from './login.service';
 
@Injectable()
export class DataServices{
    
    estudiantes: Estudiantes[] = [{nombres:"Victor Alejandro" , apellidoP: "Tobar", apellidoM: "Vera", direccion: "Mercedes #1234", edad:"30", rut: "17080268", cverificacion: "3", email:"mail@gmail.com", telefono:"34401045"}];

    

    constructor(private httpClient: HttpClient,
                private loginService: LoginService){}
    



    ///////////////////////////////////////////////////////////////////////////////

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://siga-cf823.firebaseio.com/datos.json?auth='+token);
    }
    cargarEstudiante(){
        const token = this.loginService.getIdToken();

        return this.httpClient.get('https://siga-cf823.firebaseio.com/datos.json?auth='+token);
    }



            //Guarda todo el arreglo de personas 
    guardarPersonas(estudiantes: Estudiantes[]) {
        const token = this.loginService.getIdToken();

        this.httpClient.put('https://siga-cf823.firebaseio.com/datos.json?auth='+token , estudiantes)
            .subscribe(
                (response) => {
                    console.log("resultado guardar Personas: " + response);
                },
                (error) => console.log("Error en guardar Personas: " + error)
            );
    }


    modificarPersona(index:number, estudiantes: Estudiantes){
        const token = this.loginService.getIdToken();

        let url: string;
        url = 'https://siga-cf823.firebaseio.com' + '/datos/' + index + '.json?auth='+token;
        console.log("url de modificarPersona:" + url);
        this.httpClient.put( url, estudiantes)
            .subscribe(
                (response) => {
                    console.log("resultado modificar Persona: " + response);
                },
                (error) => console.log("Error en modificar Persona: " + error)
            );
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();

        let url: string;
        url = 'https://siga-cf823.firebaseio.com' + '/datos/' + (index) + '.json?auth='+token;
        console.log("url de eliminarPersona:" + url);
        this.httpClient.delete( url)
            .subscribe(
                (response) => {
                    console.log("resultado eliminar Persona: " + response);
                },
                (error) => console.log("Error en eliminar Persona: " + error)
            );
    }





    ///////////////////////////////////////////////////////////////////////////////
/*
    //Guardar Estudiante
    guardarEstudiantes(estudiantes: Estudiantes[]){
        console.log("estudiantes guardarEstudiantes: "+estudiantes);

        this.httpClient.put('https://siga-cf823.firebaseio.com/datos.json',estudiantes)
        .subscribe(
            response => console.log("El estudiante se ha guardado correctamente!!."+response),
            error => console.log("Error al guardar Estudiante"+error)
        );
    
    }
*/

    /*
    setEstudiantes(estudiantes: Estudiantes[]){
        this.estudiantes = estudiantes;
    }


    modificarEstudianteHTTP(index:number, estudiante: Estudiantes){
        let url: string;
        url = 'https://siga-cf823.firebaseio.com/datos/'+ index + '.json';
        this.httpClient.put(url, estudiante)
        .subscribe(
            response => console.log("El estudiante ha sido modificada: " + response),
            error => console.log("Error en modificar al Estudiante: "+ error)
        )
    }


    encontrarEstudiante(index: number){
        let estudiante: Estudiantes = this.estudiantes[index];
        return estudiante;
    }

    modificarEstudiante(index: number, estudiante: Estudiantes){
        let estudiantev = this.estudiantes[index];
        estudiantev.nombres = estudiante.nombres;
        estudiantev.apellidoP = estudiante.apellidoP;
        estudiantev.apellidoM = estudiante.apellidoM;
        estudiantev.direccion = estudiante.direccion;
        estudiantev.email = estudiante.email;
        estudiantev.rut = estudiante.rut;
        estudiantev.email = estudiante.email;
        estudiantev.telefono = estudiante.telefono;

       
    }*/
 
} 