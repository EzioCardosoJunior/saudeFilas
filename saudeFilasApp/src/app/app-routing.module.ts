import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TelaConsultaComponent } from './components/tela-consulta/tela-consulta.component';

const routes: Routes = [
  {
    path:"app-tela-consulta",
    component: TelaConsultaComponent
  },
  {
    path:"app-home",
    component: HomeComponent
  },
  
  {
    path: '', 
    redirectTo: 'app-home', 
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
