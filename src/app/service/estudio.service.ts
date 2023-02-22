import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstudio } from '../interface/estudio.interface';
import { estudio } from '../model/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url = 'https://portfolio-backend-bm2j.onrender.com/estudios/';

  constructor(private http: HttpClient) { }

  public getEstudio(): Observable<estudio[]> {
    return this.http.get<estudio[]>(this.url + 'traer');
  }

  public getSingleEstudio(id: number): Observable<estudio> {
    return this.http.get<estudio>(this.url + 'traer/' + id);
  }

  public createEstudio(form: IEstudio): Observable<any> {
    return this.http.post<any>(this.url + 'crear', form);
  }

  public updateEstudio(form: IEstudio, id: number) {
    return this.http.put(this.url + 'editar/' + id, form);
  }

  public deleteEstudio(id: number) {
    return this.http.delete(this.url + 'borrar/' + id);
  }
}
