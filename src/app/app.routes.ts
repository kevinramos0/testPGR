import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { PersonasComponent } from './pages/personas/personas.component';

export const routes: Routes = [
  { path: 'empresas', component: EmpresasComponent },
  { path: 'personas', component: PersonasComponent },
];
