import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { UsuarioService } from './shared/usuario.service';
import { RouterModule, Routes } from '@angular/router';
import { TareaService } from './shared/tarea.service';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { EditarTareaComponent } from './editar-tarea/editar-tarea.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FiltroTareasPipe } from './filtro-tareas.pipe';

@NgModule({
  declarations: [
     AppComponent,
     DashboardComponent,
     ListaUsuariosComponent,
     EditarUsuarioComponent,
     ListaTareasComponent,
     FiltroTareasPipe,
     EditarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usuarios/editar/:id', component: EditarUsuarioComponent },
      { path: 'tareas/editar/:id', component: EditarTareaComponent },
      { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
    ])
  ],
  providers: [
    UsuarioService,
    TareaService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
