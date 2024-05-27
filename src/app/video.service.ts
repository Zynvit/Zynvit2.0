import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  playVideo(videoElement: HTMLVideoElement): void {
    videoElement.play();
  }

  pauseVideo(videoElement: HTMLVideoElement): void {
    videoElement.pause();
  }

  toggleVideo(videoElement: HTMLVideoElement): void {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
}