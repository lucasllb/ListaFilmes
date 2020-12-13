import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme-editar',
  templateUrl: './filme-editar.component.html',
  styleUrls: ['./filme-editar.component.scss']
})
export class FilmeEditarComponent implements OnInit {

  _id: String = '';
  filmeForm: FormGroup;
  nome: String = '';
  ano: number = null;
  genero: String = '';
  descricao: String = '';
  poster: String = '';
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filmeForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'ano': [null, Validators.required],
      'diretor': [null, Validators.required],
      'genero': [null, Validators.required],
      'descricao': [null, Validators.required],
      'poster': [null, Validators.required],
      'id': [this._id]
    });
    this.getFilme(this.route.snapshot.params['id']);
  }

  getFilme(id) {
    this.api.getFilme(id)
    .subscribe(data => {
      this._id = data.id.toString();
      this.filmeForm.setValue({
        nome: data.nome,
        ano: data.ano,
        diretor: data.diretor,
        genero: data.genero,
        descricao: data.descricao,
        poster: data.poster,
        id: data.id
      });
    });
  }

  updateFilme(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateFilme(this._id, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/filmes']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
