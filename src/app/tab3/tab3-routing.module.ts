import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutcouvertureComponent } from '../components/ajoutcouverture/ajoutcouverture.component'

import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page
  },
  {
    path: 'ajoutcouverture',
    component: AjoutcouvertureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3PageRoutingModule {}
