import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainerProfilePage } from './trainer-profile.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerProfilePageRoutingModule {}
