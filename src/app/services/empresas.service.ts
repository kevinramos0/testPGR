import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmpresas } from '../interfaces/empresas.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  private URL_API: string;
  constructor(private http: HttpClient) {
    this.URL_API = 'https://localhost:7116/api/Empresa';
   }

   getEmpresas():Observable<any> {
      return this.http.get(`${this.URL_API}/IndexEmpresas`);
   }

   createEmpresa(empresa: IEmpresas): Observable<any> {
    return this.http.post(`${this.URL_API}/CreateEmpresa`,empresa);
   }

   deleteEmpresa(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/DeleteEmpresa/${id}`);
   }
}
