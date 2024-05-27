import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoMakerProfilePageRoutingModule } from './video-maker-profile-routing.module';

import { VideoMakerProfilePage } from './video-maker-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoMakerProfilePageRoutingModule
  ],
  declarations: [VideoMakerProfilePage]
})
export class VideoMakerProfilePageModule {}
