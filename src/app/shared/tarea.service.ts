import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TareaModel } from './tarea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

    BASE_URL = "http://localhost:3000"

  constructor(private http: HttpClient) { }

    // TAREAS

    obtenerTareas() {
      return this.http.get<TareaModel[]>(this.BASE_URL+'/tareas');
    }
  
    obtenerTarea(id: string) {
      return this.http.get<TareaModel[]>(`${this.BASE_URL}/tareas/${id}`);
    }

    obtenerTareasPorEstado(estado: string): Observable<TareaModel[]> {
      return this.http.get<TareaModel[]>(`${this.BASE_URL}/tareas?estado=${estado}`);
    }
  
    agregarTarea(tarea: TareaModel) {
      return this.http.post<string>(`${this.BASE_URL}/tareas/agregar`, tarea);
    }
  
    actualizarTarea(tarea: TareaModel) {
      return this.http.put<string>(`${this.BASE_URL}/tareas/actualizar/${tarea.id}`, tarea);
    }
  
    borrarTarea(id: string) {
      return this.http.delete<string>(`${this.BASE_URL}/tareas/borrar/${id}`);
    }
}
