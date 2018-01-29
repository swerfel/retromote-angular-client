import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import { StickyNoteComponent } from '../sticky-note/sticky-note.component';
import { DraggableComponent } from '../draggable/draggable.component';
import { TranslateToBoundsLocationDirective } from '../bounds/translate-to-bounds-location.directive';
import { SvgTransformerService } from '../svg-transformer.service';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ] // TODO find a way to test without that
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
