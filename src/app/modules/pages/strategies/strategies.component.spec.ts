import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategiesComponent } from './strategies.component';

describe('StrategiesComponent', () => {
  let component: StrategiesComponent;
  let fixture: ComponentFixture<StrategiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StrategiesComponent]
    });
    fixture = TestBed.createComponent(StrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
