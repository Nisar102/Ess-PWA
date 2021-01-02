import { NgxSpinnerService } from 'ngx-spinner';
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
  message = "No data to display";


  dateFrom = '2020-05-01';
  dateTo = '2020-07-31';
  EmployeeId = '39';

  constructor(private _apiService: EssService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.GetLoanLedger();
  }

  GetLoanLedger() {


    this.spinner.show();

    this._apiService.GetLoanLedger(this.dateFrom, this.dateTo, this.EmployeeId).subscribe(r => {

      this.data = r;
      if (this.data.length === 0) {
        this.message = 'No record found';
      }

      this.spinner.hide();

      console.log(JSON.stringify(this.data));
    }, (error: HttpErrorResponse) => {
      this.spinner.hide();
      console.log(error.error);
    });
  }
}
