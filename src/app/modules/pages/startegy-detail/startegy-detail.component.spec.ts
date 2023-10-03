import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartegyDetailComponent } from './startegy-detail.component';

describe('StartegyDetailComponent', () => {
  let component: StartegyDetailComponent;
  let fixture: ComponentFixture<StartegyDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StartegyDetailComponent]
    });
    fixture = TestBed.createComponent(StartegyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
