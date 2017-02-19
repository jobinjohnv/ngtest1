import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UsersComponent } from './components/user.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,UsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
