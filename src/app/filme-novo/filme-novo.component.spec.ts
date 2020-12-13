import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeNovoComponent } from './filme-novo.component';

describe('FilmeNovoComponent', () => {
  let component: FilmeNovoComponent;
  let fixture: ComponentFixture<FilmeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
