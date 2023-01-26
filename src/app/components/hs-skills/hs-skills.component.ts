import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'hs-skills',
  templateUrl: './hs-skills.component.html',
  styleUrls: ['./hs-skills.component.css']
})
export class HsSkillsComponent {
  isLogged = false;
  skill!: skills[];
  user!: string[];
  verif = false;

  constructor (private tokenService: TokenService, private router: Router,
    private skillService: SkillsService) {}

  ngOnInit(): void {
    this.getSkill();
    
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
  
  getSkill() {
    this.skillService.getSkill().subscribe(
      data => this.skill = data
    );
  }

  crear() {
    this.router.navigate(['create-form-sh'])
  }

  editar(id:number) {
    this.router.navigate(['edit-form-sh',id])
  }

  borrar(id: number) {
    if(confirm('Estas seguro que desear borrar?')) {
      this.skillService.deleteSkill(id).subscribe(
        data => {
          console.log("Borrado");
          this.getSkill();
        }
      )
    }
  }
}
