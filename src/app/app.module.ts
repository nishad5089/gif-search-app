import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifModule } from './gif/gif.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GifModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }