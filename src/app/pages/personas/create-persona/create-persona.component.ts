
import { Component, EventEmitter, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PersonasService } from '../../../services/personas.service';
import { IPersonas } from '../../../interfaces/personas.interfce';

import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-create-persona',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule, ReactiveFormsModule, CommonModule,CalendarModule,InputTextModule],
  templateUrl: './create-persona.component.html',
  styleUrl: './create-persona.component.scss'
})
export class CreatePersonaComponent {
  visible:boolean = false;
  formPersona = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    ocupacion: ['', Validators.required],
  });
  @Output() created: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonasService
  ) {}


  get nombre() {
    return this.formPersona.controls.nombre;
  }

  get apellido() {
    return this.formPersona.controls.apellido;
  }
  get fechaNacimiento() {
    return this.formPersona.controls.fechaNacimiento;
  }

  get ocupacion() {
    return this.formPersona.controls.ocupacion;
  }
  showDialog() {
      this.visible = true;
  }
  saveEmpresa(): void {
    if (this.formPersona.valid) {
      this.personaService
        .create(this.formPersona.value as IPersonas)
        .subscribe(
          (data) => {
            this.formPersona.reset();
            this.visible = false;
            this.created.emit(null);
          },
          (error) => {
            console.log('Error');
          }
        );
    } else {
      this.formPersona.markAllAsTouched();
    }
  }
}
