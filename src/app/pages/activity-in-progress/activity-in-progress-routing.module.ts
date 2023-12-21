import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityInProgressPage } from './activity-in-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityInProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityInProgressPageRoutingModule {}
