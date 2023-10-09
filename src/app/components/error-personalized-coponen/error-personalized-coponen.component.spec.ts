import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPersonalizedCoponenComponent } from './error-personalized-coponen.component';

describe('ErrorPersonalizedCoponenComponent', () => {
  let component: ErrorPersonalizedCoponenComponent;
  let fixture: ComponentFixture<ErrorPersonalizedCoponenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPersonalizedCoponenComponent]
    });
    fixture = TestBed.createComponent(ErrorPersonalizedCoponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
