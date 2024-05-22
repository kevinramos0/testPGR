
import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { IPersonas } from '../../interfaces/personas.interfce';
import { PersonasService } from '../../services/personas.service';
import { CreatePersonaComponent } from './create-persona/create-persona.component';

@Component({
    selector: 'app-personas',
    standalone: true,
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.scss',
    imports: [
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        TableModule,
        CreatePersonaComponent,
    ]
})
export class PersonasComponent implements OnInit {
  listPersonas: IPersonas[] = [];
  empresa: IPersonas | undefined;
  formPersona = this.formBuilder.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    ocupacion: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonasService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.personaService.getAll().subscribe(
      (data) => {
        const persona = data.map((a: IPersonas) => {
          return {
            'id': a.id,
            'nombre': a.nombre,
            'apellido': a.apellido,
            'fechaNacimiento': a.fechaNacimiento,
            'ocupacion': a.ocupación,
          }
        });
        this.listPersonas = persona;
      },
      (error) => console.log('dfdf', error)
    );
    /*.subscribe(data => this.listPersonas = {
      nombre: (data as any).nombre,
      telefono:  (data as any).telefono,
      date: (data as any).direccion,
  });*/
  }

  delete(id: number): void {
    if (id) {
      this.personaService.delete(id).subscribe(
        (data) => {
          this.getAll();
        },
        (error) => {
          console.log('Error');
        }
      );
    }
  }

  getOne(persona: IPersonas): void {
    console.log(persona);
    (this.formPersona.value as IPersonas) = persona;
    console.log(this.formPersona);
  }
}
