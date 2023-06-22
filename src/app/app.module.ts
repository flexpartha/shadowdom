import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { AppChild2Component } from './app-child2/app-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    AppChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
