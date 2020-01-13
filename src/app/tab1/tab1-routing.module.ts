import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1Page } from './tab1.page';
import { BookcoverComponent } from '../components/bookcover/bookcover.component'
import { MenuhomeComponent } from '../components/menuhome/menuhome.component';
import { CategoriesComponent } from '../components/categories/categories.component'


const routes: Routes = [
  {
    path: 'book/:id',
    component: Tab1Page
    },
  {
    path:'book/:id/:chapitres',
    component: BookcoverComponent
  },
  {
    path:'',
    component: MenuhomeComponent
  },
  {path: 'categories',
  component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
