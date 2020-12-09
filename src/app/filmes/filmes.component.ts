import { Filme } from 'src/model/filme';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})

export class FilmesComponent implements OnInit {

  displayedColumns: string[] = ['poster', 'nome', 'ano', 'diretor', 'genero', 'descricao' ];
  dataSource: Filme[];

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getFilmes()
    .subscribe(res => {
        this.dataSource = res;
      }, err => {
        console.log(err);
      });
  }

}
