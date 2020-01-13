import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Page } from './tab2.page';
import { MenuprofilComponent } from '../components/menuprofil/menuprofil.component';

const routes: Routes = [
  {
    path: '',
    component: MenuprofilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
