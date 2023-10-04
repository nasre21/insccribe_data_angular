import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCaractersComponent } from './emp-caracters.component';

describe('EmpCaractersComponent', () => {
  let component: EmpCaractersComponent;
  let fixture: ComponentFixture<EmpCaractersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpCaractersComponent]
    });
    fixture = TestBed.createComponent(EmpCaractersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
