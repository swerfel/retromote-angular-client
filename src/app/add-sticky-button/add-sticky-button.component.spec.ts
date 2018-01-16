import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStickyButtonComponent } from './add-sticky-button.component';

describe('AddStickyButtonComponent', () => {
  let component: AddStickyButtonComponent;
  let fixture: ComponentFixture<AddStickyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStickyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStickyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
