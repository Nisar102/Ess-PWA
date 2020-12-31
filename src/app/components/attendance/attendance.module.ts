
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';



@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AttendanceRoutingModule
  ],
  providers: []
})
export class AttendanceModule { }
