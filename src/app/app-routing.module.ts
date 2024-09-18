import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { EditarTareaComponent } from './editar-tarea/editar-tarea.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // Define las rutas:

  { path: 'dashboard', component: DashboardComponent },
  { path:'usuarios', component: ListaUsuariosComponent },
  { path:'usuarios/editar/:id', component: EditarUsuarioComponent },
  { path:'usuarios/agregar', component: EditarUsuarioComponent },
  { path:'tareas', component: ListaTareasComponent },
  { path:'tareas/editar/:id', component: EditarTareaComponent },
  { path:'tareas/agregar', component: EditarTareaComponent },
  { path:'', redirectTo:'/dashboard', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
