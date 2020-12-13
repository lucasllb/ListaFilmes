import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filme } from 'src/model/filme';

import JsonFile from 'src/Filmes.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private filmes:Filme[] = JsonFile;

  getFilmes (): Observable<Filme[]> {
    
    this.filmes = JsonFile;

    return of(this.filmes)
  }

  getFilme(id: number): Observable<Filme> {
    let index = this.filmes.findIndex(item => item.id == id);

    return of(this.filmes[index]);
  }

  updateFilme(id, filme): Observable<any> {

    let index = this.filmes.findIndex(item => item.id == id);

    this.filmes[index] = filme;

    return of(this.filmes[index]);

  } 

  addFilme(filme): Observable<Filme> {
    filme.id = Math.random();

    this.filmes.push(filme);

    let index = this.filmes.findIndex(item => item.id == filme.id);

    return of(this.filmes[index]);

  }

  deleteFilme(id: number): Observable<Filme[]> {

    let index = this.filmes.findIndex(item => item.id == id);

    this.filmes.splice(index, 1);

    return of(this.filmes);
  }

}