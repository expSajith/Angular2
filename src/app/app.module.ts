import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule} from '@angular/forms';
import  {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { userComponent }  from './components/user.component';
import { aboutComponent }  from './components/about.component';
import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,routing],
  declarations: [ AppComponent,userComponent,aboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
