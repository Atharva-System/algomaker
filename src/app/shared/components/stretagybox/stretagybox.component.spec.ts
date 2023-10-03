import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretagyboxComponent } from './stretagybox.component';

describe('StretagyboxComponent', () => {
  let component: StretagyboxComponent;
  let fixture: ComponentFixture<StretagyboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretagyboxComponent]
    });
    fixture = TestBed.createComponent(StretagyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
