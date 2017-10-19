import { Component, EventEmitter, Output } from '@angular/core'

import { Event } from './event'

import { UserTokenService } from './user-token.service'
import { CalendarService } from './calendar.service'

@Component({
  selector:'create-event',
  templateUrl:'./create-event.component.html',
  providers: [UserTokenService,CalendarService],
  styleUrls: [ './create-event.component.css' ]
})
export class CreateEventComponent {
  private type:string = 'Homework'
  private summary:string;
  private startDatetime: string = new Date().toISOString().slice(0, 10);
  private types = ['Homework', 'Task','Project']
  private token: string;
  private userDetail: any={};

  constructor (
    private userTokenService: UserTokenService,
    private calendarService: CalendarService
  ) {}

  getUser(){
    return [
      this.userTokenService.getUserInfo(),
      this.userTokenService.getIdentity()
     ]

  }

  @Output() onInsert = new EventEmitter()

  insertEventInCalender(): void {
    let event = this.createEvent()
    let userPromise = this.getUser()
    Promise.all(userPromise)
      .then(userDetail=>{
        this.userDetail = userDetail[0]
        this.token = userDetail[1]
        this.calendarService.createEvent(this.userDetail.email, this.token, event)
          .then(data =>{
            console.log(data)
            this.onInsert.emit(null)
          })
      })
  }

  createEvent(): Event {
    if (!this.summary){
      throw "Summary cannot be undefined"
    }
    return {
      'summary': this.type + ' : ' + this.summary,
      'start': {
        'dateTime': new Date(this.startDatetime).toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'end': {
        'dateTime': this.addDay(this.startDatetime).toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'attendees': [],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'popup', 'minutes': 24 * 60},
        ]
      }
     }
  }

  addDay(date) {
    let extra_day = new Date(date);
    extra_day.setDate(extra_day.getDate() + 1);
    return extra_day;
  }

}