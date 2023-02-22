import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISkills } from '../interface/skills.interface';
import { skills } from '../model/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  url = 'https://portfolio-backend-bm2j.onrender.com/skills/';

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<skills[]> {
    return this.http.get<skills[]>(this.url + 'traer');
  }

  public getSingleSkill(id: number): Observable<skills> {
    return this.http.get<skills>(this.url + 'traer/' + id);
  }

  public createSkill(form: ISkills): Observable<any> {
    return this.http.post<any>(this.url + 'crear', form);
  }

  public updateSkill(form: ISkills, id: number) {
    return this.http.put(this.url + 'editar/' + id, form);
  }

  public deleteSkill(id: number) {
    return this.http.delete(this.url + 'borrar/' + id);
  }
}
