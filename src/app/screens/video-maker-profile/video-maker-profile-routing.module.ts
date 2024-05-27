import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoMakerProfilePage } from './video-maker-profile.page';

const routes: Routes = [
  {
    path: '',
    component: VideoMakerProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoMakerProfilePageRoutingModule {}
