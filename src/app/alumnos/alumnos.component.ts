import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Usuarios } from '../usuarios.model';
import { REGISTROJSON } from '../registro.json';
import { PersonasServices } from '../personas.service';

 
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  //Capturar elementos de la clase Padre registros.component.ts
  //@Input() usuarios_hijo: Usuarios;
  @Input() usuarios_hijo: Usuarios;
  @Input() indice: number;


  constructor(private personaservice: PersonasServices) {}

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personaservice.saludar.emit(this.indice);
  }

}
