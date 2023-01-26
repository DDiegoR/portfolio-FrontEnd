import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IEstudio } from 'src/app/interface/estudio.interface';
import { estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'create-form-estudio',
  templateUrl: './create-form-estudio.component.html',
  styleUrls: ['./create-form-estudio.component.css']
})
export class CreateFormEstudioComponent implements OnInit{

  nuevoForm!: FormGroup;
  nuevoEstudio!: estudio;

  constructor(private estudioService: EstudioService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nuevoForm = this.formBuilder.group ({
      titulo: ['', Validators.required],
      link: ['',[]],
      descripcion: ['', Validators.required],
      imagen: ['', []],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    })
  }

  crearEstudio(form: IEstudio) {
    this.estudioService.createEstudio(form).subscribe(
      data => {
        console.log("Estudio creado");
        this.router.navigate(['']);
      }
    )
  }
}
