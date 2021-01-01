

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoanLedgerRoutingModule } from './loanledger-routing.module';
import { LoanLedgerComponent } from './loan-ledger.component';



@NgModule({
  declarations: [
    LoanLedgerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoanLedgerRoutingModule
  ],
  providers: []
})
export class LoanLedgerModule { }
