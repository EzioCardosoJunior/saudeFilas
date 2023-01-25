import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './tela-consulta/tela-consulta.component';

const routes: Routes = [
  {
    path:"app-tela-consulta",
    component: TelaConsultaComponent
  },
  
  {
    path: '', 
    redirectTo: 'app-tela-consulta', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
