import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import {RegisterComponent} from '../components/register/register.component'
import {SigninComponent} from '../components/signin/signin.component'



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'register',
        component: RegisterComponent
      }

    ])
  ],
  declarations: [HomePage , RegisterComponent, SigninComponent]
})
export class HomePageModule {}
