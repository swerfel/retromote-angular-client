import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableComponent } from './draggable.component';
import { SvgTransformerService } from '../svg-transformer.service';

describe('DraggableComponent', () => {
  let component: DraggableComponent;
  let fixture: ComponentFixture<DraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableComponent ],
      providers: [ SvgTransformerService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
