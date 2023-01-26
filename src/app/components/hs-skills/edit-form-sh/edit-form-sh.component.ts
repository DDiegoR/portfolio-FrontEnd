import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ISkills } from 'src/app/interface/skills.interface';
import { skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'edit-form-sh',
  templateUrl: './edit-form-sh.component.html',
  styleUrls: ['./edit-form-sh.component.css']
})
export class EditFormSHComponent {
  skill!: skills;
  editForm!: FormGroup;
  id!: number;

  constructor(private skillService: SkillsService, private router: Router, private formBuilder: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getTecnologia();

    this.editForm = this.formBuilder.group ({
      titulo: ['', Validators.required],
      porcentaje: ['',[]],
      imagen: ['', Validators.required]
    });
  }

  getTecnologia() {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.skillService.getSingleSkill(this.id).subscribe(
      data => this.skill = data
    );
  }

  editTecno(form: ISkills) {
    this.id = (parseInt(this.route.snapshot.params['id']));
    this.skillService.updateSkill(form,this.id).subscribe(
      data => {
        console.log("Skill actualizada");
        this.router.navigate(['']);
      }
    )
  }
}
