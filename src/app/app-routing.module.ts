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
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login-guardian.service';

const routes: Routes = [
  //Login
  {path: '', component: LoginComponent},

  //Menú
  {path: 'inicio', component: InicioComponent, canActivate:[LoginGuardian]},
  {path: 'horario', component: HorarioComponent, canActivate:[LoginGuardian]},
  {path: 'asignatura', component: AsignaturaComponent, canActivate:[LoginGuardian]},
  {path: 'libretadecomunicaciones', component: LibretadecomunicacionesComponent, canActivate:[LoginGuardian]},
  {path: 'libretadenotas', component: LibretadenotasComponent, canActivate:[LoginGuardian]},
  {path: 'reforzamiento', component: ReforzamientoComponent, canActivate:[LoginGuardian]},
  {path: 'contactosdocentes', component: ContactosdocentesComponent, canActivate:[LoginGuardian]},
  {path: 'canaldeayuda', component: CanaldeayudaComponent, canActivate:[LoginGuardian]},
  {path: 'estudiantes', component: EstudiantesComponent, canActivate:[LoginGuardian]},

  {path: 'estudiante/agregar', component: EstudianteComponent, canActivate:[LoginGuardian]},
  {path: 'estudiante/:id', component: EstudianteComponent, canActivate:[LoginGuardian]},
  //{path: 'estudiante/modificar/:id', component: EstudianteComponent},
  {path: 'estudiante/eliminar', component: EstudianteComponent, canActivate:[LoginGuardian]},

  


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
