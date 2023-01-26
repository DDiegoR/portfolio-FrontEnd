import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IExperiencia } from 'src/app/interface/experiencia.interface';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'edit-form-sm',
  templateUrl: './edit-form-sm.component.html',
  styleUrls: ['./edit-form-sm.component.css']
})

export class EditFormSMComponent implements OnInit {
  experiencia!: experiencia;
  editForm!: FormGroup;
  id!: number;

  constructor(private experienciaService: ExperienciaService, private router: Router, private formBuilder: FormBuilder,
            private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getExperiencia();

    this.editForm = this.formBuilder.group ({
      empresa: ['', Validators.required],
      logo: ['',[]],
      rolActividad: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  getExperiencia() {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.experienciaService.getSingleExperiencia(this.id).subscribe(
      data => this.experiencia = data
    );
  }

  editSM(form: IExperiencia) {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.experienciaService.updateExperiencia(form,this.id).subscribe(
      data => {
        console.log("Experiencia actualizada");
        this.router.navigate(['']);
      }
    )
  }


}
