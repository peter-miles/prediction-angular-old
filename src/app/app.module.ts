import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PlayerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
