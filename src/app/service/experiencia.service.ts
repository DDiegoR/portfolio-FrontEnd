import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExperiencia } from '../interface/experiencia.interface';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = 'http://localhost:8080/experiencias/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<experiencia[]> {
    return this.http.get<experiencia[]>(this.url + 'traer');
  }

  public getSingleExperiencia(id: number): Observable<experiencia> {
    return this.http.get<experiencia>(this.url + 'traer/' + id);
  }

  public createExperiencia(form: IExperiencia): Observable<any> {
    return this.http.post<any>(this.url + 'crear', form);
  }

  public updateExperiencia(form: IExperiencia, id: number) {
    return this.http.put(this.url + 'editar/' + id, form);
  }

  public deleteExperiencia(id: number) {
    return this.http.delete(this.url + 'borrar/' + id);
  }
}
