import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  protected apiUrl: string = 'https://travel-api.clicksomeone.com/';

  constructor(protected httpClient: HttpClient) { }

  getDestinations(){
    return this.httpClient.get<any>(`${this.apiUrl}`+`destinations`)
  }

  getTickets(){
    return this.httpClient.get<any>(`${this.apiUrl}`+`tickets`)
  }

}
