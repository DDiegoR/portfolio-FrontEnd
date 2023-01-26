import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISkills } from 'src/app/interface/skills.interface';
import { skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'create-form-sh',
  templateUrl: './create-form-sh.component.html',
  styleUrls: ['./create-form-sh.component.css']
})
export class CreateFormSHComponent {
  nuevoForm!: FormGroup;
  nuevaTecno!: skills;

  constructor(private skillService: SkillsService, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.nuevoForm = this.formBuilder.group ({
      titulo: ['', Validators.required],
      porcentaje: ['',[]],
      imagen: ['', []]
    })
  }

  crearTecno(form: ISkills) {
    this.skillService.createSkill(form).subscribe(
      data => {
        console.log("Tecnología creada");
        this.router.navigate(['']);
      }
    )
  }
}
