import { Component } from '@angular/core'

import { UserTokenService } from './user-token.service'
import { CalendarService } from './calendar.service'

import { Event } from './event'

import {} from '@types/gapi'

@Component({
  selector:'tasks-list',
  templateUrl:'./task-list.component.html',
})

export class TaskListComponent{
  private page: number = 1;
  private token: string;
  private userDetail: any={};
  private calendar: string;
  private types = ['homework', 'task','project'];
  private events: Event[];

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
            this.events=  events.items.filter(event =>{
              for (let i = 0; i< this.types.length; i++){
                if (event.summary.includes(this.types[i])) {
                  return true
                }
              }
              return false
            })
          })
      })
  }

  private handleError(error:any): Promise<any>{
   console.log('Error has occured', error)
   return Promise.reject(error.message|| error)
  }

}