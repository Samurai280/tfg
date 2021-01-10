import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTeoriaComponent } from './pagina-teoria.component';

describe('PaginaTeoriaComponent', () => {
  let component: PaginaTeoriaComponent;
  let fixture: ComponentFixture<PaginaTeoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaTeoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
