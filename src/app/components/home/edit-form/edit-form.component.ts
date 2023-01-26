import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPersona } from 'src/app/interface/persona.interface';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  
  persona!: persona;  
  editForm!: FormGroup;
  
  constructor(private personaService: PersonaService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.getPerfil();

    this.editForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['',Validators.required],
      imagen: ['',Validators.required],
      rolTrabajo: ['',Validators.required]
    });
  }

  getPerfil() {
    this.personaService.getPersona().subscribe(
      data => this.persona = data
    );
  }

  editHome(form: IPersona) {
    this.personaService.updatePersona(form).subscribe(
      data => {
        console.log("Perfil actualizado");
        this.router.navigate(['']);
      }
    )
  }

}
