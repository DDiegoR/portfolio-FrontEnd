import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProyecto } from '../interface/proyecto.interface';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'https://portfolio-backend-bm2j.onrender.com/proyectos/';

  constructor(private http: HttpClient) { }

  public getProyecto(): Observable<proyecto[]> {
    return this.http.get<proyecto[]>(this.url + 'traer');
  }

  public getSingleProyecto(id: number): Observable<proyecto> {
    return this.http.get<proyecto>(this.url + 'traer/' + id);
  }

  public createProyecto(form: IProyecto): Observable<any> {
    return this.http.post<any>(this.url + 'crear', form);
  }

  public updateProyecto(form: IProyecto, id: number) {
    return this.http.put(this.url + 'editar/' + id, form);
  }

  public deleteProyecto(id: number) {
    return this.http.delete(this.url + 'borrar/' + id);
  }
}
