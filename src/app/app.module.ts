import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { EditableTextAreaComponent } from './editable-text-area/editable-text-area.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { ApplyBoundsDirective } from './bounds/apply-bounds.directive';
import { TranslateToBoundsLocationDirective } from './bounds/translate-to-bounds-location.directive';
import { SetScaleDirective } from './set-scale.directive';
import { ButtonComponent } from './button/button.component';
import { DiscardButtonComponent } from './discard-button/discard-button.component';
import { DraggableComponent } from './draggable/draggable.component';
import { SvgTransformerService } from './svg-transformer.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StickyNoteComponent,
    EditButtonComponent,
    EditableTextAreaComponent,
    ConfirmButtonComponent,
    ApplyBoundsDirective,
    TranslateToBoundsLocationDirective,
    SetScaleDirective,
    ButtonComponent,
    DiscardButtonComponent,
    DraggableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ SvgTransformerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
