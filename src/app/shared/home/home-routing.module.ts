import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      {
        // tslint:disable-next-line:max-line-length
        path: 'Advance-request', loadChildren: () => import('../../components/advance-request/advancerequest.module').then(m => m.AdvanceRequestModule)
      },
      {
        path: 'Attendance', loadChildren: () => import('../../components/attendance/attendance.module').then(m => m.AttendanceModule)
      },
      {
        path: 'Loan-Ledger', loadChildren: () => import('../../components/loan-ledger/loanledger.module').then(m => m.LoanLedgerModule)
      },
      {
        path: 'Loan-request', loadChildren: () => import('../../components/loan-request/loanrequest.module').then(m => m.LoanRequstModule)

      },
      {
        path: 'Payslip', loadChildren: () => import('../../components/payslip/payslip.module').then(m => m.PayslipModule)

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule]
})
export class HomeRoutingModule { }
