import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { GuiasDeEstudioComponent } from './components/guias-de-estudio/guias-de-estudio.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'guias-de-estudio', component: GuiasDeEstudioComponent },
  { path: 'estudiantes', component: EstudiantesComponent  },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
