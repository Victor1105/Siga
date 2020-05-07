import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Usuarios } from '../usuarios.model';
import { REGISTROJSON } from '../registro.json';


@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  
  titulo: string = "Listado de Registros";
  titulo_listado: string = "Listado Json";
  usuarios: Usuarios[] = [new Usuarios("Victor","30","kylian","1234"),new Usuarios("Daniela","28","Fudiosa","TeAmo")];

  //ViewChild('parametroDelHTML')
  //decorador 

  @ViewChild('nombreInput') nombreInput_var : ElementRef;
  @ViewChild('edadInput') edadInput_var : ElementRef;
  @ViewChild('usuarioInput') usuarioInput_var : ElementRef;
  @ViewChild('passwordInput') passwordInput_var : ElementRef;

 
  //nombreInput: string;
  //edadInput: number;
  //usuarioInput: string;
  //passwordInput: string;
  indice: number;

  //Pasar json a arreglo del modelo.
  //guardar el modelo
  registrojson: Usuarios[];
  resultado: number;

  ngOnInit() {
    this.registrojson = REGISTROJSON;    
  }
  
  //Se agregan en los parametros las referencias locales del formulario
  /*
  
  VIEW CHILD
  onAgregarUsuario() se deja sin parametros cuando se declaran las variables @ViewChild('nombreInput') nombreInput_var : ElementRef;
  
  */
  onAgregarUsuario(nombreInput:HTMLInputElement, edadInput:HTMLInputElement, usuarioInput:HTMLInputElement, passwordInput:HTMLInputElement){
 
    let usuarios1 = new Usuarios(nombreInput.value, edadInput.value, usuarioInput.value, passwordInput.value);
    this.usuarios.push(usuarios1);

    //USUARIOS JSON

    //let usuariosJson = new Usuarios(this.nombreInput, this.edadInput, this.usuarioInput, this.passwordInput)
    let usuariosJson = new Usuarios(nombreInput.value, edadInput.value, usuarioInput.value, passwordInput.value)    
    this.registrojson.push(usuariosJson);

    //Crear objeto con el decorador @ViewChild

    let usuariosViewChild = new Usuarios(this.nombreInput_var.nativeElement.value,
                                         this.edadInput_var.nativeElement.value,
                                         this.usuarioInput_var.nativeElement.value,
                                         this.passwordInput_var.nativeElement.value,);

    this.usuarios.push(usuariosViewChild);                                     

  }

  onResultado(resultado: number){
    this.resultado = resultado;

  }


}
