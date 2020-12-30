
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceRequestRoutingModule } from './advancerequest-routing.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AdvanceRequestRoutingModule
  ],
  providers: []
})
export class AdvanceRequestModule { }
