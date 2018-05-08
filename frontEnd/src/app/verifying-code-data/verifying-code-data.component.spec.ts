import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyingCodeDataComponent } from './verifying-code-data.component';

describe('VerifyingCodeDataComponent', () => {
  let component: VerifyingCodeDataComponent;
  let fixture: ComponentFixture<VerifyingCodeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyingCodeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyingCodeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
