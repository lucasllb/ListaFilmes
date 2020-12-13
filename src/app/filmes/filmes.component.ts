import { MatTable, MatTableModule } from '@angular/material/table';
import { Filme } from 'src/model/filme';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})


export class FilmesComponent implements OnInit {
  @ViewChild(MatTable, {static: true}) filmesTable: MatTable<any>;
  
  displayedColumns: string[] = ['poster', 'nome', 'ano', 'diretor', 'genero', 'descricao', 'id'];
  dataSource: Filme[];
  filme: Filme = { id: null, nome: '', ano: null, diretor: '', genero: '', descricao: '', poster: '' };
  isLoadingResults = true;

  constructor(private _api: ApiService, private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._api.getFilmes()
    .subscribe(res => {
        this.dataSource = res;
      }, err => {
        console.log(err);
      });
  }

  getFilme(id) {
    this._api.getFilme(id)
      .subscribe(data => {
        this.filme = data;
        console.log(this.filme);
        this.isLoadingResults = false;
      });
  }

  deleteFilme(id) {
    this._api.deleteFilme(id)
      .subscribe(res => {
          this.isLoadingResults = false;
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  
  refresh() {
    this.filmesTable.renderRows();
  }

 }
