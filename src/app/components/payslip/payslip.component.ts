import { HttpErrorResponse } from '@angular/common/http';
import { EssService } from './../../services/ess.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})

export class PayslipComponent implements OnInit {

  data: any;

  ProcessId;
  EmployeeName;
  DepartmentName;
  BasicPay;
  EmployeeCode;
  BranchName;
  Date;
  PresentDays;
  Absent;
  Lates;
  WorkingDays;
  Leaves;
  EarlyGones;
  HalfDays;
  TotalAllowance;
  OverTimeSalary;
  AddIncome;
  TotalSalary;
  TotalLoan;
  Advance;
  Tax;
  EOBI;
  FinalSalary;
  HoursWorked;

  EmployeeId = '39';
  dateFrom = '2020-05-01';

  constructor(private _apiService: EssService) { }

  ngOnInit() {
    // this.GetPaySlip();
  }

  GetPaySlip() {


    this._apiService.GetPaySlip(this.dateFrom, this.EmployeeId).subscribe(r => {

      this.data = r;

      console.log(JSON.stringify(this.data));

      this.ProcessId = this.data['ProcessId'];
      this.EmployeeName = this.data['EmployeeName'];
      this.DepartmentName = this.data['DepartmentName'];
      this.BasicPay = this.data['BasicPay'];
      this.EmployeeCode = this.data['EmployeeCode'];
      this.BranchName = this.data['BranchName'];
      this.Date = this.data['Date'];
      this.PresentDays = this.data['PresentDays'];
      this.Absent = this.data['Absent'];
      this.Lates = this.data['Lates'];
      this.WorkingDays = this.data['WorkingDays'];
      this.Leaves = this.data['ProcessLeavesId'];
      this.EarlyGones = this.data['EarlyGones'];
      this.HalfDays = this.data['HalfDays'];
      this.TotalAllowance = this.data['TotalAllowance'];
      this.OverTimeSalary = this.data['OverTimeSalary'];
      this.AddIncome = this.data['AddIncome'];
      this.TotalSalary = this.data['TotalSalary'];
      this.TotalLoan = this.data['TotalLoan'];
      this.Advance = this.data['Advance'];
      this.Tax = this.data['Tax'];
      this.EOBI = this.data['EOBI'];
      this.FinalSalary = this.data['FinalSalary'];
      this.HoursWorked = this.data['HoursWorked'];

    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
