import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescubrimientoComponent } from './descubrimiento.component';

describe('DescubrimientoComponent', () => {
  let component: DescubrimientoComponent;
  let fixture: ComponentFixture<DescubrimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescubrimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescubrimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
