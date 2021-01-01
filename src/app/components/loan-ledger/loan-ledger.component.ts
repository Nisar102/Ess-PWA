import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EssService } from 'src/app/services/ess.service';

@Component({
  selector: 'app-loan-ledger',
  templateUrl: './loan-ledger.component.html',
  styleUrls: ['./loan-ledger.component.css']
})

export class LoanLedgerComponent implements OnInit {

  data: any;
  DeductionDate;
  LoanName;
  Remarks;
  LoanAmount;
  DeductionAmount;

  constructor(private _apiService: EssService) { }

  ngOnInit() { 
    this.GetLoanLedger();
  }

  GetLoanLedger() {

    const dateFrom = '2020-05-01';
    const dateTo = '2020-07-31';
    const EmployeeId = '39';

    this._apiService.GetLoanLedger(dateFrom, dateTo, EmployeeId).subscribe(r => {

      this.data = r;
    

      console.log(JSON.stringify(this.data));
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
    });
  }
}
