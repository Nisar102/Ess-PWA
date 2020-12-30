import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanLedgerComponent } from './loan-ledger.component';

const routes: Routes = [
  {
    path: '', component: LoanLedgerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanLedgerRoutingModule { }
