import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProyecto } from 'src/app/interface/proyecto.interface';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'create-form-proyecto',
  templateUrl: './create-form-proyecto.component.html',
  styleUrls: ['./create-form-proyecto.component.css']
})
export class CreateFormProyectoComponent {

  nuevoForm!: FormGroup;
  nuevoProyecto!: proyecto;

  constructor(private proyectoService: ProyectoService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nuevoForm = this.formBuilder.group ({
      titulo: ['', Validators.required],
      link: ['',[]],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required]
    })
  }

  crearProyecto(form: IProyecto) {
    this.proyectoService.createProyecto(form).subscribe(
      data => {
        console.log("Proyecto creado");
        this.router.navigate(['']);
      }
    )
  }
}
