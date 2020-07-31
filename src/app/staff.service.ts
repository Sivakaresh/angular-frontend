import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Staff } from './staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private baseUrl: string = 'http://localhost:8080';
  constructor(private _http: HttpClient) {}

  getStaffList(): Observable<any> {
    return this._http
      .get<any>(`${this.baseUrl}/view`)
      .pipe(catchError(this.errorHandler));
  }
  getStaff(id: number): Observable<any> {
    return this._http
      .get(`${this.baseUrl}/view/${id}`)
      .pipe(catchError(this.errorHandler));
  }
  // addStaff(staff: Staff) {
  //   return this._http
  //     .post<any>(this.baseUrl, staff)
  //     .pipe(catchError(this.errorHandler));
  // }
  addStaff(staff: Object): Observable<Object> {
    return this._http.post(`${this.baseUrl}/add`, staff);
  }
  updateStaff(id: number, value: any): Observable<Object> {
    return this._http.put(`${this.baseUrl}/update`, value);
  }
  deleteStaff(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: 'text',
    });
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
