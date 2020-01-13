import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { Tab3Page } from './tab3.page';

import { MenuwriteComponent } from '../components/menuwrite/menuwrite.component';
import { AjoutcouvertureComponent } from '../components/ajoutcouverture/ajoutcouverture.component'
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Tab3Page, MenuwriteComponent, AjoutcouvertureComponent]
})
export class Tab3PageModule {}
