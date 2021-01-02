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
  myData: any;

  dateFrom = '2020-04-29';
  dateTo = '2020-05-31';
  EmployeeId = '3775';

  constructor(private _apiService: EssService) { }

  ngOnInit() {
    // this.GetAttendance();
  }

  GetAttendance() {

    this._apiService.GetAttendance(this.dateFrom, this.dateTo, this.EmployeeId).subscribe((r: any) => {
      console.log(r);
      this.data = r;
      console.log('data' + JSON.stringify(this.data));
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
    });
  }

}
