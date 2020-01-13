import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';
import { BookComponent } from '../components/book/book.component'
import {BookcoverComponent } from '../components/bookcover/bookcover.component'
import {MenuhomeComponent } from '../components/menuhome/menuhome.component'
import { CategoriesComponent } from '../components/categories/categories.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page, BookComponent, BookcoverComponent, MenuhomeComponent, CategoriesComponent]
})
export class Tab1PageModule {}
