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

  constructor(private _apiService: EssService) { }

  ngOnInit() {
    this.GetPaySlip();
  }

  GetPaySlip() {

    const dateFrom = '2020-05-01';
    const EmployeeId = '39';

    this._apiService.GetPaySlip(dateFrom, EmployeeId).subscribe(r => {

      this.data = r;

      this.ProcessId = this.data[0]['ProcessId'];
      this.EmployeeName = this.data[0]['EmployeeName'];
      this.DepartmentName = this.data[0]['DepartmentName'];
      this.BasicPay = this.data[0]['BasicPay'];
      this.EmployeeCode = this.data[0]['EmployeeCode'];
      this.BranchName = this.data[0]['BranchName'];
      this.Date = this.data[0]['Date'];
      this.PresentDays = this.data[0]['PresentDays'];
      this.Absent = this.data[0]['Absent'];
      this.Lates = this.data[0]['Lates'];
      this.WorkingDays = this.data[0]['WorkingDays'];
      this.Leaves = this.data[0]['ProcessLeavesId'];
      this.EarlyGones = this.data[0]['EarlyGones'];
      this.HalfDays = this.data[0]['HalfDays'];
      this.TotalAllowance = this.data[0]['TotalAllowance'];
      this.OverTimeSalary = this.data[0]['OverTimeSalary'];
      this.AddIncome = this.data[0]['AddIncome'];
      this.TotalSalary = this.data[0]['TotalSalary'];
      this.TotalLoan = this.data[0]['TotalLoan'];
      this.Advance = this.data[0]['Advance'];
      this.Tax = this.data[0]['Tax'];
      this.EOBI = this.data[0]['EOBI'];
      this.FinalSalary = this.data[0]['FinalSalary'];

    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
