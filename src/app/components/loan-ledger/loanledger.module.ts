
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanLedgerRoutingModule } from './loanledger-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LoanLedgerRoutingModule
  ],
  providers: []
})
export class LoanLedgerModule { }
