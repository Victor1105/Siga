import { Component, OnInit } from '@angular/core';
import { LibretadeComunicaciones } from '../libretacomunicaciones.model';
import { LIBRETACOMUNICACION_JSON } from '../libretacomunicacion.json';

@Component({
  selector: 'app-libretadecomunicaciones',
  templateUrl: './libretadecomunicaciones.component.html',
  styleUrls: ['./libretadecomunicaciones.component.css']
})
export class LibretadecomunicacionesComponent implements OnInit {

  libretadeComunicaciones: LibretadeComunicaciones[];

  constructor() { }

  ngOnInit(): void {
    this.libretadeComunicaciones = LIBRETACOMUNICACION_JSON;
  }

}
