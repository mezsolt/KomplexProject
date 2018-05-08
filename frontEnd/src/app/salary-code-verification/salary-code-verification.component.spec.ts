import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryCodeVerificationComponent } from './salary-code-verification.component';

describe('SalaryCodeVerificationComponent', () => {
  let component: SalaryCodeVerificationComponent;
  let fixture: ComponentFixture<SalaryCodeVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryCodeVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryCodeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
