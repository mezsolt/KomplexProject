import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDataComponent } from './salary-data.component';

describe('SalaryDataComponent', () => {
  let component: SalaryDataComponent;
  let fixture: ComponentFixture<SalaryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
