import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscardButtonComponent } from './discard-button.component';

describe('DiscardButtonComponent', () => {
  let component: DiscardButtonComponent;
  let fixture: ComponentFixture<DiscardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
