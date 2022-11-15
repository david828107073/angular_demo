import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { FontSize2Component } from './font-size2/font-size2.component';
import { FontSize3Component } from './font-size3/font-size3/font-size3.component';
import { FontSizeVarComponent } from './font-size-var/font-size-var/font-size-var.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FontSizeComponent,
    FontSize2Component,
    FontSize3Component,
    FontSizeVarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
