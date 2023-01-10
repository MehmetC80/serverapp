import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl = 'any';

  //Procedale approach
  // getServers():Observable<CustomResponse>{

  //     return this.http.get<CustomResponse>(`http://localhost:8084/server/list`);
  // }

  servers$ = <Observable<CustomResponse>>(
    this.http
      .get<CustomResponse>(`${this.apiUrl}/server/list`)
      .pipe(tap(console.log), catchError(this.handleError))
  );

  handleError(handleError: any): Observable<never> {
    return throwError('Method not implemented.');
  }
}
