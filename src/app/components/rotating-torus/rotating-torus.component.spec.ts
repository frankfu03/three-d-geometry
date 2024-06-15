import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingTorusComponent } from './rotating-torus.component';

describe('RotatingTorusComponent', () => {
  let component: RotatingTorusComponent;
  let fixture: ComponentFixture<RotatingTorusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingTorusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotatingTorusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
