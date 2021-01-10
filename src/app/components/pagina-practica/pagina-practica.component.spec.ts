import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPracticaComponent } from './pagina-practica.component';

describe('PaginaPracticaComponent', () => {
  let component: PaginaPracticaComponent;
  let fixture: ComponentFixture<PaginaPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
