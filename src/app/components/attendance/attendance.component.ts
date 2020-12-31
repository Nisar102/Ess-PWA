import { HttpErrorResponse } from '@angular/common/http';
import { EssService } from './../../services/ess.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements OnInit {

  data = [];

  constructor(private _apiService: EssService) { }

  ngOnInit() {
    this.GetAttendance();
  }

  GetAttendance() {
    const dateFrom = '2020-04-29';
    const dateTo = '2020-05-31';
    const EmployeeId = 3775;
    this._apiService.GetAttendance(dateFrom, dateTo, EmployeeId).subscribe((r: any) => {
      console.log(r);
      this.data = r;
      console.log('data' + JSON.stringify(this.data));
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
    });
  }

}
