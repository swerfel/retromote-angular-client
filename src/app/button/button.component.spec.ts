import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateToBoundsLocationDirective } from '../bounds/translate-to-bounds-location.directive';
import { SetScaleDirective } from '../set-scale.directive';
import { SvgTransformerService } from '../svg-transformer.service';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
        TranslateToBoundsLocationDirective,
        SetScaleDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
