import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged = false;
  user!: NuevoUsuario;
  nombreUsuario!: string;

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router, 
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login-registro'])
  }

  perfil() {
    this.nombreUsuario = this.tokenService.getUserName();
    this.router.navigate(['perfil/',this.nombreUsuario]);
  }
}
