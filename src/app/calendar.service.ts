import { Injectable } from '@angular/core'
import { Http,Headers }  from '@angular/http'

import { Event } from './event'

import {} from '@types/chrome'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CalendarService{
  private url = 'https://www.googleapis.com/calendar/v3'

  constructor(private http: Http){}

  getEvents(calendar: string, token: string): Promise<any> {
    let get_event = '/calendars/'+ calendar +'/events?access_token=' + token
    console.log(this.url+get_event)
    return this.http.get(this.url+get_event)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  createEvent(calendar:string, token:string, event: Event ): Promise<any> {
    let create_event = '/calendars/'+ calendar + '/events?access_token=' + token
    return this.http.post(this.url + create_event, event)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  deleteEvent(calendar:string, event:string, token:string): Promise<any> {
      let delete_event ='/calendars/'+ calendar + '/events/'+event+'?access_token=' + token
      return this.http.delete(this.url+ delete_event)
        .toPromise()
        .then(response=> response.json())
        .catch(this.handleError)
  }


  private handleError(error:any): Promise<any> {
    console.log('Error has occured', error)
    return Promise.reject(error.message|| error)
  }

}