import { Component, OnInit } from '@angular/core';
import { LibretadeNotas } from '../libretanotas.model';
import { LIBRETANOTAS_JSON } from '../libretadenotas.json';

@Component({
  selector: 'app-libretadenotas',
  templateUrl: './libretadenotas.component.html',
  styleUrls: ['./libretadenotas.component.css']
})
export class LibretadenotasComponent implements OnInit {

  libretanotas: LibretadeNotas[];


  constructor() { }

  ngOnInit(): void {
    this.libretanotas = LIBRETANOTAS_JSON;

  }

}
