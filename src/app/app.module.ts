import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChromeLogin } from './chrome-login.component'
import { UserTokenService } from './user-token.service'
import { CalendarService } from './calendar.service'

@NgModule({
  declarations: [
    AppComponent,
    ChromeLogin
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    UserTokenService,
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
