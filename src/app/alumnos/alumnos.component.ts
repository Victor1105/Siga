import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from '../usuarios.model';
import { REGISTROJSON } from '../registro.json';

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

  constructor() {}

  ngOnInit(): void {
  }

}
