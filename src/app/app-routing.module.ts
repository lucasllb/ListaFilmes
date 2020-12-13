import { FilmeEditarComponent } from './filme-editar/filme-editar.component';
import { FilmeNovoComponent } from './filme-novo/filme-novo.component';
import { FilmesComponent } from './filmes/filmes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'filmes',
    component: FilmesComponent,
    data: { title: 'Lista de Filmes' }
  },
  {
    path: 'filme-novo',
    component: FilmeNovoComponent,
    data: { title: 'Adicionar Filme' }
  },
  {
    path: 'filme-editar/:id',
    component: FilmeEditarComponent,
    data: { title: 'Editar o Filme' }
  },
  { path: '',
    redirectTo: '/filmes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
