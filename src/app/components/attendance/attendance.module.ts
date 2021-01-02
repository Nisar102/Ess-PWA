import { AttendanceComponent } from './attendance.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    AttendanceRoutingModule
  ],
  providers: []
})
export class AttendanceModule { }
