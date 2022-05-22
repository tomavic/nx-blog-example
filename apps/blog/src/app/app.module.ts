import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CoreModule } from '@enigma/core';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CoreModule, MatGridListModule, BrowserAnimationsModule, MatProgressBarModule, MatCardModule, MatButtonModule, MatDividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
