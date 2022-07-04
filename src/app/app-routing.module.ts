import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';

//Pestañas
import { HomeComponent } from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {HistoriaComponent} from './historia/historia.component';
import { CursosComponent } from './cursos/cursos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"historia", component:HistoriaComponent},
  {path:"cursos", component:CursosComponent},
  {path:"galeria", component:GaleriaComponent},
  {path:"asignaturas", component:AsignaturasComponent},
  {path:"signin", component:SigninComponent},
  {path:"signup", component:SignupComponent},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'notfound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
