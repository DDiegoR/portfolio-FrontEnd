import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { persona } from 'src/app/model/persona.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{
  isLogged = false;
  persona!: persona;
  experiencia!: experiencia[];
  user!: string[];
  verif = false;

  constructor (private tokenService: TokenService, private personaService: PersonaService, private router: Router,
              private experienciaService: ExperienciaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPerfil();
    this.getExperiencia();

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

  getPerfil() {
    this.personaService.getPersona().subscribe(
      data => this.persona = data
    );
  }

  getExperiencia() {
    this.experienciaService.getExperiencia().subscribe(
      data => this.experiencia = data
    );
  }

  crear() {
    this.router.navigate(['create-form'])
  }

  editar(id:number) {
    this.router.navigate(['edit-form-sm',id])
  }

  borrar(id: number) {
    if(confirm('Estas seguro que desear borrar?')) {
      this.experienciaService.deleteExperiencia(id).subscribe(
        data => {
          console.log("Borrado");
          this.getExperiencia();
        }
      )
    }
  }
}
