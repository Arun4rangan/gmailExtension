import { Injectable } from '@angular/core'

import { CalendarService } from './calendar.service'

import {} from '@types/chrome'

@Injectable()
export class UserTokenService {

  constructor(
    private calendarService: CalendarService
    ){}

  getIdentity(): Promise<any> {
    return new Promise((resolve, reject) => {
      chrome.identity.getAuthToken( {'interactive': true }, token=> {
        resolve(token);
      });
    });
  }

  getUserInfo(): Promise<any> {
    return new Promise((resolve,reject) => {
      chrome.identity.getProfileUserInfo(data=>{
        resolve(data)
      })
    })
  }

  private handleError(error:any): Promise<any>{
   console.log('Error has occured', error)
   return Promise.reject(error.message|| error)
  }

}

