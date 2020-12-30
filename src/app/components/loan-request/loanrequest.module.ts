
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanRequestRoutingModule } from './loanrequest-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    LoanRequestRoutingModule
  ],
  providers: []
})
export class LoanRequstModule { }
