import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedDataComponent } from './deleted-data.component';

describe('DeletedDataComponent', () => {
  let component: DeletedDataComponent;
  let fixture: ComponentFixture<DeletedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
