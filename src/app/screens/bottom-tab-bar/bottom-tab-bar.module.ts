import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BottomTabBarPageRoutingModule } from './bottom-tab-bar-routing.module';

import { BottomTabBarPage } from './bottom-tab-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BottomTabBarPageRoutingModule
  ],
  declarations: [BottomTabBarPage]
})
export class BottomTabBarPageModule {}
