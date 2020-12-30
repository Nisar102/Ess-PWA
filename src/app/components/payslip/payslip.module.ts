
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayslipRoutingModule } from './payslip-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PayslipRoutingModule
  ],
  providers: []
})
export class PayslipModule { }
