import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkouttipDetailPage } from './workouttip-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WorkouttipDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkouttipDetailPageRoutingModule {}
