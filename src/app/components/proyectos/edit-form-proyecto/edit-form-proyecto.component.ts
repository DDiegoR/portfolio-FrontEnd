import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IProyecto } from 'src/app/interface/proyecto.interface';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'edit-form-proyecto',
  templateUrl: './edit-form-proyecto.component.html',
  styleUrls: ['./edit-form-proyecto.component.css']
})
export class EditFormProyectoComponent {
  proyecto!: proyecto;
  editForm!: FormGroup;
  id!: number;

  constructor(private proyectoService: ProyectoService, private router: Router, private formBuilder: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProyecto();

    this.editForm = this.formBuilder.group ({
      titulo: ['', Validators.required],
      link: ['',[]],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  getProyecto() {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.proyectoService.getSingleProyecto(this.id).subscribe(
      data => this.proyecto = data
    );
  }

  editProyecto(form: IProyecto) {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.proyectoService.updateProyecto(form,this.id).subscribe(
      data => {
        console.log("Proyecto actualizado");
        this.router.navigate(['']);
      }
    )
  }
}
