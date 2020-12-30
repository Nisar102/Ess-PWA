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

  GetAttendance(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }

  GetLoanLedger(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }

  GetPaySlip(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }
  LoanRequest(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }

  AdvanceRequest(Username, Password) {
    return this.http.get(environment.baseUrl + 'Login/GetUserLogin?Username=' + Username + '&Password=' + Password);
  }



}
