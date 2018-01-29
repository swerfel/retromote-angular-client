import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DraggableComponent } from './draggable/draggable.component';
import { SvgTransformerService } from './svg-transformer.service';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { TranslateToBoundsLocationDirective } from './bounds/translate-to-bounds-location.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BoardComponent,
        DraggableComponent,
        StickyNoteComponent,
        TranslateToBoundsLocationDirective
      ],
      imports: [
        FormsModule
      ],
      providers: [ SvgTransformerService ],
      schemas: [ NO_ERRORS_SCHEMA ] // TODO find a way to test without that
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Retromote');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
