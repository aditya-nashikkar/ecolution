import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TakeActionService {

  baseUrl = 'http://ecolutionapp.herokuapp.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  test(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + '/trail', this.httpOptions);
  }

  predict(object: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/predict', object, this.httpOptions) 
  }

}
