import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersona } from '../interface/persona.interface';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'https://portfolio-backend-bm2j.onrender.com/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.url + 'traer/perfil');
  }

  public updatePersona(perso: IPersona) {
    return this.http.put(this.url + 'editar/perfil', perso);
  }
}
