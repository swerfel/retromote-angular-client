import { NO_ERRORS_SCHEMA } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNoteComponent } from './sticky-note.component';
import { DraggableComponent } from '../draggable/draggable.component';
import { SvgTransformerService } from '../svg-transformer.service';
import { TranslateToBoundsLocationDirective } from '../bounds/translate-to-bounds-location.directive';

describe('StickyNoteComponent', () => {
  let component: StickyNoteComponent;
  let fixture: ComponentFixture<StickyNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StickyNoteComponent,
        DraggableComponent,
        TranslateToBoundsLocationDirective
      ],
      providers: [ SvgTransformerService ],
     schemas: [ NO_ERRORS_SCHEMA ] // TODO find a way to test without that
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
