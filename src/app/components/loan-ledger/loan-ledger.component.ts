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


  dateFrom = '2020-05-01';
  dateTo = '2020-07-31';
  EmployeeId = '39';

  constructor(private _apiService: EssService) { }

  ngOnInit() {
    this.GetLoanLedger();
  }

  GetLoanLedger() {



    this._apiService.GetLoanLedger(this.dateFrom, this.dateTo, this.EmployeeId).subscribe(r => {

      this.data = r;


      console.log(JSON.stringify(this.data));
    }, (error: HttpErrorResponse) => {
      console.log(error.error);
    });
  }
}
