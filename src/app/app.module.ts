import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { EditableTextAreaComponent } from './editable-text-area/editable-text-area.component';
import { ApplyBoundsDirective } from './bounds/apply-bounds.directive';
import { TranslateToBoundsLocationDirective } from './transformation/translate-to-bounds-location.directive';
import { SetScaleDirective } from './transformation/set-scale.directive';
import { ButtonComponent } from './button/button.component';
import { DraggableComponent } from './draggable/draggable.component';
import { SvgTransformerService } from './transformation/svg-transformer.service';
import { SocketIOConnectionService } from './socket-io-synchronization/socket-io-connection.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StickyNoteComponent,
    EditableTextAreaComponent,
    ApplyBoundsDirective,
    TranslateToBoundsLocationDirective,
    SetScaleDirective,
    ButtonComponent,
    DraggableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule
  ],
  providers: [
    SvgTransformerService,
    SocketIOConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
