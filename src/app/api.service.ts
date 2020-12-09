import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Filme } from 'src/model/filme';

import JsonFile from 'src/Filmes.json';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private filmes:Filme[];

  getFilmes (): Observable<Filme[]> {

    this.filmes = JsonFile;

    return of(this.filmes)
  }

}
