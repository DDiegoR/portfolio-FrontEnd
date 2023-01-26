import { Component, OnInit } from '@angular/core';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit{
  user!: NuevoUsuario;
  nombreUsuario!: string;

  constructor(private authService: AuthService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.nombreUsuario = this.tokenService.getUserName();
    this.authService.get(this.nombreUsuario).subscribe(
      data => this.user = data
    );
  }
}
