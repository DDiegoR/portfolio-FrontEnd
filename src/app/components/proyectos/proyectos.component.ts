import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  isLogged = false;
  proyecto!: proyecto[];
  user!: string[];
  verif = false;

  constructor (private tokenService: TokenService, private router: Router,
    private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.getProyecto();

    if(this.tokenService.getToken()) {
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }

    this.user = this.tokenService.getAuthorities();
    if((this.isLogged == true) && (this.user.length == 2)) {
      this.verif = true;
    }
  }

  getProyecto() {
    this.proyectoService.getProyecto().subscribe(
      data => this.proyecto = data
    );
  }

  crear() {
    this.router.navigate(['create-form-proyecto'])
  }

  editar(id:number) {
    this.router.navigate(['edit-form-proyecto',id])
  }

  borrar(id: number) {
    if(confirm('Estas seguro que desear borrar?')) {
      this.proyectoService.deleteProyecto(id).subscribe(
        data => {
          console.log("Borrado");
          this.getProyecto();
        }
      )
    }
  }
}