import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayosComponent } from './rayos.component';

describe('RayosComponent', () => {
  let component: RayosComponent;
  let fixture: ComponentFixture<RayosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RayosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RayosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
