import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectoresComponent } from './detectores.component';

describe('DetectoresComponent', () => {
  let component: DetectoresComponent;
  let fixture: ComponentFixture<DetectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
