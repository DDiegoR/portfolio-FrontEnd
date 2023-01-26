import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormEstudioComponent } from './components/estudios/create-form-estudio/create-form-estudio.component';
import { EditFormEstudioComponent } from './components/estudios/edit-form-estudio/edit-form-estudio.component';

import { HomeMainComponent } from './components/home-main/home-main.component';
import { EditFormComponent } from './components/home/edit-form/edit-form.component';
import { CreateFormSHComponent } from './components/hs-skills/create-form-sh/create-form-sh.component';
import { EditFormSHComponent } from './components/hs-skills/edit-form-sh/edit-form-sh.component';
import { LoginRegistroComponent } from './components/login-registro/login-registro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CreateFormProyectoComponent } from './components/proyectos/create-form-proyecto/create-form-proyecto.component';
import { EditFormProyectoComponent } from './components/proyectos/edit-form-proyecto/edit-form-proyecto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CreateFormComponent } from './components/sobre-mi/create-form/create-form.component';
import { EditFormSMComponent } from './components/sobre-mi/edit-form-sm/edit-form-sm.component';


const routes: Routes = [
  {path: '', component: HomeMainComponent},
  {path: 'login-registro', component: LoginRegistroComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'registro', component: RegistroComponent}
    ]},
  {path: 'edit-form', component: EditFormComponent},
  {path: 'edit-form-sm/:id', component: EditFormSMComponent},
  {path: 'create-form', component: CreateFormComponent},
  {path: 'create-form-estudio', component: CreateFormEstudioComponent},
  {path: 'edit-form-estudio/:id', component: EditFormEstudioComponent},
  {path: 'create-form-proyecto', component: CreateFormProyectoComponent},
  {path: 'edit-form-proyecto/:id', component: EditFormProyectoComponent},
  {path: 'perfil/:user', component: PerfilComponent},
  {path: 'edit-form-sh/:id', component: EditFormSHComponent},
  {path: 'create-form-sh', component: CreateFormSHComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
