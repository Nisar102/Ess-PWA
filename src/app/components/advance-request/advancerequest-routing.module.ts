import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvanceRequestComponent } from './advance-request.component';

const routes: Routes = [
  {
    path: '', component: AdvanceRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRequestRoutingModule { }
