import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuarios } from '../usuarios.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasServices } from '../personas.service';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],

})
export class ServiciosComponent implements OnInit {

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('edadInput') edadInput: ElementRef;
  @ViewChild('usuarioInput') usuarioInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  //nombreInput: string;
  //edadInput: number;
  //usuarioInput: string;
  //passwordInput: string;
  //Inicializar el objeto vacio para agregar elementos
  usuarios: Usuarios[] = [];


//Dependency Injection = Se inyecta el servicio
  constructor(private loggingServices:LoggingService, private personasService:PersonasServices) {
        
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: "+indice)
                );          

               }

  ngOnInit(): void {
    this.usuarios = this.personasService.usuarios;
  }

  //onAgregarUsuario(usuarios: Usuarios, nombreInput:HTMLInputElement, edadInput:HTMLInputElement, usuarioInput:HTMLInputElement, passwordInput:HTMLInputElement){
    onAgregarUsuario(usuarios: Usuarios){
    //let usuarios1 = new Usuarios(nombreInput.value, edadInput.value, usuarioInput.value, passwordInput.value)
    
    //AGREGAR USUARIOS CON EL SERVICIO "personas.service.ts"
    
    let usuarios1 = new Usuarios(this.nombreInput.nativeElement.value, this.edadInput.nativeElement.value, this.usuarioInput.nativeElement.value, this.passwordInput.nativeElement.value)
    //this.usuarios.push(usuarios1);
    //this.loggingServices.enviarMensaje("Mensaje desde consola: "+usuarios1.nombre+" edad: "+ usuarios1.edad +" usuario: "+ usuarios1.usuario + " password: "+usuarios1.password);
    this.personasService.agregarUsuarios(usuarios1);
  }

}
