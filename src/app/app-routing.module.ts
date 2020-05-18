import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HorarioComponent } from './horario/horario.component';
import { RegistrosComponent } from './registros/registros.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { LibretadecomunicacionesComponent } from './libretadecomunicaciones/libretadecomunicaciones.component';
import { LibretadenotasComponent } from './libretadenotas/libretadenotas.component';
import { ReforzamientoComponent } from './reforzamiento/reforzamiento.component';
import { ContactosdocentesComponent } from './contactosdocentes/contactosdocentes.component';
import { CanaldeayudaComponent } from './canaldeayuda/canaldeayuda.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

const routes: Routes = [
  {path: 'horario', component: HorarioComponent},
  {path: 'asignatura', component: AsignaturaComponent},
  {path: 'libretadecomunicaciones', component: LibretadecomunicacionesComponent},
  {path: 'libretadenotas', component: LibretadenotasComponent},
  {path: 'reforzamiento', component: ReforzamientoComponent},
  {path: 'contactosdocentes', component: ContactosdocentesComponent},
  {path: 'canaldeayuda', component: CanaldeayudaComponent},
  {path: 'estudiantes', component: EstudiantesComponent},
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'estudiante/agregar', component: EstudianteComponent},
  {path: 'estudiante/:id', component: EstudianteComponent},
  //{path: 'estudiante/modificar/:id', component: EstudianteComponent},
  {path: 'estudiante/eliminar', component: EstudianteComponent},



  {path: 'calcu', component: CalculadoraComponent},
  {path: 'registro', component: RegistrosComponent},
  {path: 'sidebar', component: SidebarComponent},

]
 
@NgModule({
 
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
