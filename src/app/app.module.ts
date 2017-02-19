import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { UsersComponent } from './components/user.component';
import { MattestComponent } from './components/mattest.component';
import 'hammerjs';

@NgModule({
  imports:      [ BrowserModule, MaterialModule],
  declarations: [ AppComponent,UsersComponent,MattestComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
