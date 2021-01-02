import { HttpErrorResponse } from '@angular/common/http';
import { EssService } from './../../services/ess.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

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
  message = "No data to display";

  constructor(private _apiService: EssService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // this.GetAttendance();
  }

  GetAttendance() {

    this.spinner.show();

    this._apiService.GetAttendance(this.dateFrom, this.dateTo, this.EmployeeId).subscribe((r: any) => {
      console.log(r);
      this.data = r;
      if (this.data.length === 0) {
        this.message = 'No record found';
      }
      this.spinner.hide();
      console.log('data' + JSON.stringify(this.data));
    }, (error: HttpErrorResponse) => {
      this.spinner.hide();
      console.log(error.error);
    });
  }

}
