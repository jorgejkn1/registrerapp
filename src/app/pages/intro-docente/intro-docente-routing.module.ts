import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroDocentePage } from './intro-docente.page';

const routes: Routes = [
  {
    path: '',
    component: IntroDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroDocentePageRoutingModule {}
