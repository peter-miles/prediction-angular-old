import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, PlayerComponent, MessageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
