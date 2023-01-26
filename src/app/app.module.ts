import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { EditFormComponent } from './components/home/edit-form/edit-form.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginRegistroComponent } from './components/login-registro/login-registro.component';
import { EditFormSMComponent } from './components/sobre-mi/edit-form-sm/edit-form-sm.component';
import { CreateFormComponent } from './components/sobre-mi/create-form/create-form.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { CreateFormEstudioComponent } from './components/estudios/create-form-estudio/create-form-estudio.component';
import { EditFormEstudioComponent } from './components/estudios/edit-form-estudio/edit-form-estudio.component';
import { interceptorProvider } from './service/interceptor-service';
import { ModalCertificadosComponent } from './components/estudios/modal-certificados/modal-certificados.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CreateFormProyectoComponent } from './components/proyectos/create-form-proyecto/create-form-proyecto.component';
import { EditFormProyectoComponent } from './components/proyectos/edit-form-proyecto/edit-form-proyecto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RedesComponent } from './components/redes/redes.component';
import { HsSkillsComponent } from './components/hs-skills/hs-skills.component';
import { CreateFormSHComponent } from './components/hs-skills/create-form-sh/create-form-sh.component';
import { EditFormSHComponent } from './components/hs-skills/edit-form-sh/edit-form-sh.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreMiComponent,
    HeaderComponent,
    LoginComponent,
    HomeMainComponent,
    EditFormComponent,
    RegistroComponent,
    LoginRegistroComponent,
    EditFormSMComponent,
    CreateFormComponent,
    EstudiosComponent,
    CreateFormEstudioComponent,
    EditFormEstudioComponent,
    ModalCertificadosComponent,
    ProyectosComponent,
    CreateFormProyectoComponent,
    EditFormProyectoComponent,
    PerfilComponent,
    RedesComponent,
    HsSkillsComponent,
    CreateFormSHComponent,
    EditFormSHComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    RoundProgressModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
