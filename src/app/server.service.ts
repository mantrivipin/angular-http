import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const header = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://vipin-ng-http.firebaseio.com/data.json', servers,
    //  { headers: header });
     return this.http.put('https://vipin-ng-http.firebaseio.com/data.json', servers,
     { headers: header });
  }

  getServers() {
    return this.http.get('https://vipin-ng-http.firebaseio.com/data.json')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json();
            return data;
          }
        ),
        catchError(
          (error: Response) => {
            console.log(error);
            return throwError('Something went wrong');
          }
        )
      )
  }

  getAppName() {
    return this.http.get('https://vipin-ng-http.firebaseio.com/appName.json')
      .pipe(
        map(
          (response: Response) => {
            const data = response.json()
            return data;
          }
        )
      )
  }
}