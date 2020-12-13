import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-filme-novo',
  templateUrl: './filme-novo.component.html',
  styleUrls: ['./filme-novo.component.scss']
})
export class FilmeNovoComponent implements OnInit {

  filmeForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.filmeForm = this.formBuilder.group({
      'nome' : [null, Validators.required],
      'ano' : [null, Validators.required],
      'diretor' : [null, Validators.required],
      'genero' : [null, Validators.required],
      'descricao' : [null, Validators.required],
      'poster' : [null, Validators.required]
    });
  }

  addFilme(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addFilme(form)
    .subscribe(res => {
      const id = res['id'];
      this.isLoadingResults = false;
      this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
