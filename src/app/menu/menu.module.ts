import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { RouterModule, OutletContext } from '@angular/router';

import {MenucomponentComponent} from '../components/menucomponent/menucomponent.component'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: MenuPage,
      },
  
    ])
  ],
  declarations: [MenuPage, MenucomponentComponent]
})
export class MenuPageModule {}
