import { environment } from './../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';


@Injectable({ providedIn: 'root' })

export class EssService {

  constructor(private http: HttpClient) { }


  Login(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }

  GetAttendance(dateFrom, dateTo, EmployeeId) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(environment.baseUrl + 'Reports/getAttendance?dateFrom=' + dateFrom + '&dateTo=' + dateTo + '&EmployeeId=' + EmployeeId);
  }

  GetLoanLedger(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }

  GetPaySlip(dateFrom, EmployeeId) {
    return this.http.get(environment.baseUrl + 'Reports/getSalarySlip?dateFrom=' + dateFrom + '&EmployeeId=' + EmployeeId);
  }
  LoanRequest(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }

  AdvanceRequest(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }



}
