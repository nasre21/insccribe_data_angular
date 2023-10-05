import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoComponentComponent } from './who-component.component';

describe('WhoComponentComponent', () => {
  let component: WhoComponentComponent;
  let fixture: ComponentFixture<WhoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoComponentComponent]
    });
    fixture = TestBed.createComponent(WhoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
