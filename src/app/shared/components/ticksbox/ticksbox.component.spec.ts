import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicksboxComponent } from './ticksbox.component';

describe('TicksboxComponent', () => {
  let component: TicksboxComponent;
  let fixture: ComponentFixture<TicksboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TicksboxComponent]
    });
    fixture = TestBed.createComponent(TicksboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
