import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpresasService } from '../../services/empresas.service';
import { IEmpresas } from '../../interfaces/empresas.interface';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { CreateEmpresaComponent } from './create-empresa/create-empresa.component';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [
    CreateEmpresaComponent,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    TableModule,
  ],
  templateUrl: './empresas.component.html',
  styleUrl: './empresas.component.scss',
})
export class EmpresasComponent implements OnInit {
  listEmpresas: IEmpresas[] = [];
  empresa: IEmpresas | undefined;
  formEmpresas = this.formBuilder.group({
    nombre: ['', Validators.required],
    telefono: ['', Validators.required],
    direccion: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private empresasService: EmpresasService
  ) {}

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas(): void {
    this.empresasService.getEmpresas().subscribe(
      (data) => {
        const empresas = data.response;
        this.listEmpresas = empresas;
      },
      (error) => console.log('dfdf', error)
    );
    /*.subscribe(data => this.listEmpresas = {
      nombre: (data as any).nombre,
      telefono:  (data as any).telefono,
      date: (data as any).direccion,
  });*/
  }

  deleteEmpresa(id: number): void {
    if (id) {
      this.empresasService.deleteEmpresa(id).subscribe(
        (data) => {
          this.getEmpresas();
        },
        (error) => {
          console.log('Error');
        }
      );
    }
  }

  getEmpresaItem(empresa: IEmpresas): void {
    console.log(empresa);
    (this.formEmpresas.value as IEmpresas) = empresa;
    console.log(this.formEmpresas);
  }
}
