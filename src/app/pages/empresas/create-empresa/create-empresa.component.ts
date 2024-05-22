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
import { IEmpresas } from '../../../interfaces/empresas.interface';
import { EmpresasService } from '../../../services/empresas.service';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';


@Component({
  selector: 'app-create-empresa',
  standalone: true,
  imports: [DialogModule, ButtonModule, FormsModule, ReactiveFormsModule, CommonModule,InputMaskModule, InputTextModule],
  templateUrl: './create-empresa.component.html',
  styleUrl: './create-empresa.component.scss'
})
export class CreateEmpresaComponent {
  visible: boolean = false;
  empresa: IEmpresas | undefined;
  formEmpresas = this.formBuilder.group({
    nombre: ['', Validators.required],
    telefono: ['', Validators.required],
    direccion: ['', Validators.required],
  });
  @Output() created: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private formBuilder: FormBuilder,
    private empresasService: EmpresasService,
  ) {}

  get nombre() {
    return this.formEmpresas.controls.nombre;
  }

  get telefono() {
    return this.formEmpresas.controls.telefono;
  }
  get direccion() {
    return this.formEmpresas.controls.direccion;
  }

  showDialog() {
      this.visible = true;
  }
  saveEmpresa(): void {
    if (this.formEmpresas.valid) {
      this.empresasService
        .createEmpresa(this.formEmpresas.value as IEmpresas)
        .subscribe(
          (data) => {
            this.formEmpresas.reset();
            this.visible = false;
            this.created.emit(null);
          },
          (error) => {
            console.log('Error');
          }
        );
    } else {
      this.formEmpresas.markAllAsTouched();
    }
  }
}
