import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header/header-bar/header-bar.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';

// ngmodule TS annotation to mark class def as an angular module
@NgModule({
  // declarations mark out which components and directives can be used in app
  declarations: [
    AppComponent,
    HeaderBarComponent,
    SideNavComponent
  ],
  // importing other modules to provide functionality to app
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  // entry point component for starting app
  bootstrap: [AppComponent]
})
export class AppModule { }
