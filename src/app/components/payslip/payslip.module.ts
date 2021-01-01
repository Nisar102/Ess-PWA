import { PayslipComponent } from './payslip.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayslipRoutingModule } from './payslip-routing.module';



@NgModule({
  declarations: [
    PayslipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PayslipRoutingModule
  ],
  providers: []
})
export class PayslipModule { }
