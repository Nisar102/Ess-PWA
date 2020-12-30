import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'Advance-request', loadChildren: '../../components/advance-reques/advancerequest.module#AdvanceRequestModule',
      },
      {
        path: 'Attendance', loadChildren: '../../components/attendance/attendance.module#AttendanceModule'
      },
      {
        path: 'Loan-Ledger', loadChildren: '../../components/loan-ledger/loanledger.module#LoanLedgerModule'

      },
      {
        path: 'Loan-request', loadChildren: '../../components/loan-request/loanrequest.module#LoanRequstModule'

      },
      {
        path: 'Payslip', loadChildren:'../../components/payslip/payslip.module#PayslipModule'

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class HomeRoutingModule { }
