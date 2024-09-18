import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit{
  tareas: Observable<TareaModel[]> = of([]);
  filtroEstado: string = 'todos';

  constructor(private tareaService: TareaService) { }

  ngOnInit(){
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    if (this.filtroEstado === 'todos') {
      this.tareas = this.tareaService.obtenerTareas().pipe(
        map(tareas => tareas || []), // Asegura que nunca sea null
        catchError(error => {
          console.error('Error al obtener tareas', error);
          return of([]); // En caso de error, retorna un array vacío
        })
      );
    } else {
      this.tareas = this.tareaService.obtenerTareasPorEstado(this.filtroEstado).pipe(
        map(tareas => tareas || []), // Asegura que nunca sea null
        catchError(error => {
          console.error('Error al obtener tareas por estado', error);
          return of([]); // En caso de error, retorna un array vacío
        })
      );
    }
  }

  aplicarFiltro(estado: string): void {
    this.filtroEstado = estado;
    this.obtenerTareas();
  }

  borrarTarea(id: string) {
    this.tareaService.borrarTarea(id).subscribe(data => {
      console.log(data);
    })
    this.tareas = this.tareaService.obtenerTareas()
  }

}
