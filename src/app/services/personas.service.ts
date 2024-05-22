import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmpresas } from '../interfaces/empresas.interface';
import { IPersonas } from '../interfaces/personas.interfce';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private URL_API: string;
  constructor(private http: HttpClient) {
    this.URL_API = 'https://localhost:7116/api/Persona';
   }

   getAll():Observable<any> {
      return this.http.get(`${this.URL_API}/IndexPersonas`);
   }

   create(persona: IPersonas): Observable<any> {
    return this.http.post(`${this.URL_API}/CreatePersona`,persona);
   }

   delete(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/DeletePersona/${id}`);
   }
}
