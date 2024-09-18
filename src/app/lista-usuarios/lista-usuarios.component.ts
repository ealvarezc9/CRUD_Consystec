import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  usuarios: Observable<UsuarioModel[]> | undefined;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(){
    this.usuarios = this.usuarioService.obtenerUsuarios();
  }

  borrarUsuario(id: string) {
    this.usuarioService.borrarUsuario(id).subscribe(data => {
      console.log(data);
    })
    this.usuarios = this.usuarioService.obtenerUsuarios()
  }

}
