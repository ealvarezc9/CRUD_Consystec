import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent {
  id: string = ''
  tarea: TareaModel = new TareaModel("","","","", "", "");

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private datePipe: DatePipe
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.spinner.show(); // Muestra el spinner
    
    if (this.id) {
      this.tareaService.obtenerTarea(this.id).subscribe(data => {
        if (data && data.length > 0) {
          this.tarea = data[0];  
        
          this.tarea.estado = this.tarea.estado === 'completadas' ? 'completadas' : 'no completadas';
           this.tarea.fecha_creacion = this.datePipe.transform(this.tarea.fecha_creacion, 'yyyy-MM-dd') || '';
           this.tarea.fecha_vencimiento = this.datePipe.transform(this.tarea.fecha_vencimiento, 'yyyy-MM-dd') || '';
          console.log(this.tarea);
        } else {
          console.log('Tarea no encontrada');
        }
      }, error => {
        console.log('Error al obtener la tarea:', error);
      });
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.tarea.id) {
      this.tareaService.actualizarTarea(this.tarea).subscribe(data => {
        alert(data)
        this.router.navigate(['/dashboard'])
      })
    } else {
      console.log('crear');
      this.tareaService.agregarTarea(this.tarea).subscribe(data => {
        alert(data)
        this.router.navigate(['/dashboard'])
      })
    }
  }

}
