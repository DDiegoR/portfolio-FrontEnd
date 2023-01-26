import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, OnSameUrlNavigation, Router } from '@angular/router';
import { estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/service/estudio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  isLogged = false;
  estudio!: estudio[];
  user!: string[];
  verif = false;

  constructor (private tokenService: TokenService, private router: Router,
    private estudioService: EstudioService) {}

  ngOnInit(): void {
    this.getEstudio();
    
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
  
  getEstudio() {
    this.estudioService.getEstudio().subscribe(
      data => this.estudio = data
    );
  }

  crear() {
    this.router.navigate(['create-form-estudio'])
  }

  editar(id:number) {
    this.router.navigate(['edit-form-estudio',id])
  }

  borrar(id: number) {
    if(confirm('Estas seguro que desear borrar?')) {
      this.estudioService.deleteEstudio(id).subscribe(
        data => {
          console.log("Borrado");
          this.getEstudio();
        }
      )
    }
  }

}
