import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEstudio } from 'src/app/interface/estudio.interface';
import { estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'edit-form-estudio',
  templateUrl: './edit-form-estudio.component.html',
  styleUrls: ['./edit-form-estudio.component.css']
})
export class EditFormEstudioComponent implements OnInit{

  estudio!: estudio;
  editForm!: FormGroup;
  id!: number;

  constructor(private estudioService: EstudioService, private router: Router, private formBuilder: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEstudio();

    this.editForm = this.formBuilder.group ({
      titulo: ['', Validators.required],
      link: ['',[]],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  getEstudio() {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.estudioService.getSingleEstudio(this.id).subscribe(
      data => this.estudio = data
    );
  }

  editEstudio(form: IEstudio) {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.estudioService.updateEstudio(form,this.id).subscribe(
      data => {
        console.log("Estudio actualizada");
        this.router.navigate(['']);
      }
    )
  }
}
