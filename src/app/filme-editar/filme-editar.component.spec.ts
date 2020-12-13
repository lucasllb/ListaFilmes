import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeEditarComponent } from './filme-editar.component';

describe('FilmeEditarComponent', () => {
  let component: FilmeEditarComponent;
  let fixture: ComponentFixture<FilmeEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
