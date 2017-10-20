import { Component, OnInit } from '@angular/core'

import { UserTokenService } from './user-token.service'
import { CalendarService } from './calendar.service'

import { Event } from './event'

import {} from '@types/gapi'

@Component({
  selector:'tasks-list',
  templateUrl:'./task-list.component.html',
})

export class TaskListComponent implements OnInit{
  private page: number = 1;
  private token: string;
  private userDetail: any={};
  private calendar: string;
  private types = ['Homework', 'Task','Project'];
  private events: any[];
  private eventCall = null;

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

  ngOnInit() {
    this.setListofEvents()
  }

  setListofEvents():void{
    this.events= []
    let userPromise = this.getUser()
    Promise.all(userPromise)
      .then(userDetail=>{
        this.userDetail = userDetail[0]
        this.token = userDetail[1]
        this.getListofEvents(null)
      }).catch(error=>{this.handleError(error, 'userDetails')})
  }

  getListofEvents(nextPage: any): void {
    this.eventCall = this.calendarService.getEvents(
      this.userDetail.email,
      this.token,
      nextPage)
    this.eventCall.then(events =>{
      let filtered_events = events.items.filter(event =>{
        for (let i = 0; i< this.types.length; i++){
          if (event.summary.includes(this.types[i])) {
            return true
          }
        }
        return false
      })
      this.events.push.apply(this.events,filtered_events)
      if(events.nextPageToken){
        this.getListofEvents(events.nextPageToken)
      } else{
        return
      }
    }).catch(error=>{this.handleError(error, 'getEvents')})
  }

  deleteEvent(event:any):void {
    this.calendarService.deleteEvent(event.creator.email, event.id, this.token)
      .then(data=>{
        this.events = this.events.filter(array_event=>{
          if (array_event != event){
            return true
          } else{
            return false
          }
        })
      })
      .catch(error =>{this.handleError(error, 'deleteEvent')})
  }

  private handleError(error:any, location:string): Promise<any>{
    console.log('Error has occured in'+ location)
    console.log('Error has occured', error)
    return Promise.reject(error.message|| error)
  }

}