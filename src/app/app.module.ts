import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './comon/header.component';
import { FooterComponet } from './comon/footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponet],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
