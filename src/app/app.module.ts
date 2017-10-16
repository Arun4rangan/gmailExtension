import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list.component'
import { CreateEventComponent } from './create-event.component'
import { UserTokenService } from './user-token.service'
import { CalendarService } from './calendar.service'

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    UserTokenService,
    CalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
