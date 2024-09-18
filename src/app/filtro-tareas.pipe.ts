import { Pipe, PipeTransform } from '@angular/core';
import { TareaModel } from './shared/tarea.model';

@Pipe({
  name: 'filtroTareas'
})
export class FiltroTareasPipe implements PipeTransform {

  transform(tareas: TareaModel[] | null, estado: string): TareaModel[] {
    if (!tareas) {
      return [];
    }
    if (estado === 'todos') {
      return tareas;
    }
    return tareas.filter(tarea => tarea.estado === estado);
  }
}
