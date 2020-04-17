import { Component, OnInit } from '@angular/core';
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
  usuarios: Usuarios[] = [new Usuarios("Victor",30,"kylian","1234"),new Usuarios("Daniela",28,"Fudiosa","TeAmo")];
  nombreInput: string;
  edadInput: number;
  usuarioInput: string;
  passwordInput: string;
  indice: number;

  //Pasar json a arreglo del modelo.
  //guardar el modelo
  registrojson: Usuarios[];
  resultado: number;

  ngOnInit() {
    this.registrojson = REGISTROJSON;    
  }

  onAgregarUsuario(){

    let usuarios1 = new Usuarios(this.nombreInput, this.edadInput, this.usuarioInput, this.passwordInput)
    this.usuarios.push(usuarios1);

    let usuariosJson = new Usuarios(this.nombreInput, this.edadInput, this.usuarioInput, this.passwordInput)
    this.registrojson.push(usuariosJson);

  }

  onResultado(resultado: number){
    this.resultado = resultado;

  }


}
