import { Component, OnInit, Input } from '@angular/core';
import { Estudiantes } from '../estudiantes.model';
import { EstudianteServices} from '../estudiante.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-estudiante-listado',
  templateUrl: './estudiante-listado.component.html',
  styleUrls: ['./estudiante-listado.component.css']
})
export class EstudianteListadoComponent implements OnInit {
  
  @Input() estudiante: Estudiantes;
  @Input() indice: number;
  

  ngOnInit() {
  }

  constructor(private estudianteServices: EstudianteServices,private router: Router) {

    

     }

  onEliminarPersona(){
    if(this.indice != null){
      this.estudianteServices.eliminarPersona(this.indice)
    }
    this.router.navigate(['estudiantes']);
  }

}
