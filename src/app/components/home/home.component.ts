import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  isLogged = false;
  persona: persona = new persona("","","","");
  user!: string[];
  verif = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) {}

  ngOnInit(): void {

    if(this.tokenService.getToken()) {
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }

    this.personaService.getPersona().subscribe(
      data => this.persona = data
    );

    this.user = this.tokenService.getAuthorities();
    if((this.isLogged == true) && (this.user.length == 2)) {
      this.verif = true;
    }
  }
}
