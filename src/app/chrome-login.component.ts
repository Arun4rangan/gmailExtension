import { Component } from '@angular/core'

import { UserTokenService } from './user-token.service'
import { CalendarService } from './calendar.service'

import {} from '@types/gapi'

@Component({
  selector:'chrome-login',
  templateUrl:'./chrome-login.component.html',
})

export class ChromeLogin{
  private token: string;
  private userDetail: any={};
  private calendar: string;

  constructor (
    private userTokenService: UserTokenService,
    private calendarService: CalendarService
    ){}

  getUser(){
    return [
      this.userTokenService.getUserInfo(),
      this.userTokenService.getIdentity()
     ]

  }

  getListofEvents(): void {
    let userPromise = this.getUser()
    Promise.all(userPromise)
      .then(userDetail=>{
        this.userDetail = userDetail[0]
        this.token = userDetail[1]
        this.calendarService.getEvents(this.userDetail.email, this.token)
          .then(events =>{
            console.log(events)
          })
      })
  }

  createEvent(
    type: string,
    summary:string,
    startDatetime: string,
    ): Event {
    return {
      'summary': type + ':' + summary,
      'start': {
        'dateTime': startDatetime,
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'end': {
        'dateTime': startDatetime,
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

  private handleError(error:any): Promise<any>{
   console.log('Error has occured', error)
   return Promise.reject(error.message|| error)
  }

}