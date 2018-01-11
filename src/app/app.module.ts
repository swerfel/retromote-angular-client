import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { PostitComponent } from './postit/postit.component';
import { EditButtonComponent } from './edit-button/edit-button.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    PostitComponent,
    EditButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
