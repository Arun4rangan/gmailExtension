import { Injectable } from '@angular/core'
import { Http,Headers }  from '@angular/http'

import {} from '@types/chrome'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CalendarService{
  private url = 'https://www.googleapis.com/calendar/v3'

  constructor(private http: Http){}

  getEvents(calendar: string, token: string): Promise<any> {
    let event_url = '/calendars/'+ calendar +'/events?access_token=' + token
    return this.http.get(this.url+event_url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  createEvent(calendar:string, token:strong, )


  private handleError(error:any): Promise<any> {
    console.log('Error has occured', error)
    return Promise.reject(error.message|| error)
  }

}