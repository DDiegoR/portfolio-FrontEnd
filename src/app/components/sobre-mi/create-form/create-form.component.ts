import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IExperiencia } from 'src/app/interface/experiencia.interface';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit{

  nuevoForm!: FormGroup;
  nuevaExperiencia!: experiencia;

  ngOnInit(): void {
    this.nuevoForm = this.formBuilder.group ({
      empresa: ['',[]],
      logo: ['',[]],
      rolActividad: ['',[]],
      descripcion: ['',[]],
      fechaInicio: ['',[]],
      fechaFin: ['',[]]
    })
  }

  constructor(private experienciaService: ExperienciaService, private router: Router, private formBuilder: FormBuilder,
    private route: ActivatedRoute) {}


  crearExp(form: IExperiencia) {
    this.experienciaService.createExperiencia(form).subscribe(
      data => {
        console.log("Experiencia creada");
        this.router.navigate(['']);
      }
    )
  }
}
