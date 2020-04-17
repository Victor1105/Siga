import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HorarioComponent } from './horario/horario.component';
import { RegistrosComponent } from './registros/registros.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';


const routes: Routes = [
  {path: '', component: CalculadoraComponent},
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
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
