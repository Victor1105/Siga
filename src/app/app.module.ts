import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Angular Material
import { MatSliderModule } from '@angular/material/slider';
//import {MatListModule} from '@angular/material/list'; 

//Boostrapt
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HorarioComponent } from './horario/horario.component';
import { RegistrosComponent } from './registros/registros.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LoggingService } from './LoggingService.service';

//Servicios
import { PersonasServices } from './personas.service';
import { DataServices } from './data.services';
import { EstudianteServices } from './estudiante.services';

//Componentes
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { LogoutComponent } from './logout/logout.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { LibretadecomunicacionesComponent } from './libretadecomunicaciones/libretadecomunicaciones.component';
import { LibretadenotasComponent } from './libretadenotas/libretadenotas.component';
import { ReforzamientoComponent } from './reforzamiento/reforzamiento.component';
import { ContactosdocentesComponent } from './contactosdocentes/contactosdocentes.component';
import { CanaldeayudaComponent } from './canaldeayuda/canaldeayuda.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { LoginGuardian } from './login-guardian.service';




const routes: Routes = [
  //{path: 'login', redirectTo: 'login', pathMatch: 'full'},
  /*{path: 'login', component: CredencialesComponent},
  {path: 'horario', component: ComponenteHorarioComponent},
  {path: 'bienvenida', component: ComponenteBienvenidaComponent},
   */
  
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HorarioComponent,
    RegistrosComponent,
    AlumnosComponent,
    CalculadoraComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    Sidebar2Component,
    LogoutComponent,
    AsignaturaComponent,
    LibretadecomunicacionesComponent,
    LibretadenotasComponent,
    ReforzamientoComponent,
    ContactosdocentesComponent,
    CanaldeayudaComponent,
    InicioComponent,
    EstudiantesComponent,
    EstudianteComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [LoggingService, PersonasServices, DataServices, EstudianteServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
