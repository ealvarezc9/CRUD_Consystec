import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {

  id = ''
  usuario = new UsuarioModel("","","");

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.spinner.show(); // Muestra el spinner
  
    if (this.id) {
      this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
        if (data && data.length > 0) {
          this.usuario = data[0]; 
          console.log(this.usuario); 
        } else {
          console.log('Usuario no encontrado');
        }
      }, error => {
        console.log('Error al obtener el usuario:', error);
      });
    }
  }
  

  onSubmit() {
    console.log('onSubmit');

    if(this.usuario.id) {
      this.usuarioService.actualizarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/dashboard'])
      })
    } else {
      console.log('crear');
      this.usuarioService.agregarUsuario(this.usuario).subscribe(data => {
        alert(data)
        this.router.navigate(['/dashboard'])
      })
    }
  }

}
