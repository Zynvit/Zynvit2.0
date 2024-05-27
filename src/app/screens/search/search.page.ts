import { Component, ElementRef, OnInit, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { VideoService } from '../../video.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoContainer') videoContainer!: ElementRef<HTMLElement>;
  @ViewChildren("horizontalVideo") horizontalDivs?: QueryList<any>
  horizontalCurrentIndex = 0;
  bannerSliderList = [
    {
      hasTag: 'Nanotechnology',
      image: '../../../assets/images/slider/slider_2.jpg',
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      playing: false
    },
    
    {
      hasTag: 'Infotechnology',
      image: '../../../assets/images/slider/slider_1.jpg',
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      playing: false
    },
    {
      hasTag: 'Biotechnology',
      image: '../../../assets/images/slider/slider_3.jpg',
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      playing: false
    },
    {
      hasTag: 'Cognotechnology',
      image: '../../../assets/images/slider/slider_4.jpg',
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      playing: false
    }
  ];

  danceLikeProList = [
    {
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      image: '../../../assets/images/dance/dance_6.jpg',
    },
  ];

  laughOutLoudList = [
    {
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
  ];

  foodList = [
    {
      image: '../../../assets/images/food/food_1.png',
    },
    {
      image: '../../../assets/images/food/food_2.png',
    },
    {
      image: '../../../assets/images/food/food_3.png',
    },
    {
      image: '../../../assets/images/food/food_4.png',
    },
    {
      image: '../../../assets/images/food/food_5.png',
    },
    {
      image: '../../../assets/images/food/food_6.png',
    },
  ];
  
  infotechnologyList = [
    {
      image: '../../../assets/images/Infotechnology/infotechnology_1.png',
    },
    {
      image: '../../../assets/images/Infotechnology/infotechnology_2.png',
    },
    {
      image: '../../../assets/images/Infotechnology/infotechnology_3.png',
    },
    {
      image: '../../../assets/images/Infotechnology/infotechnology_4.png',
    },
    {
      image: '../../../assets/images/Infotechnology/infotechnology_5.png',
    },
    {
      image: '../../../assets/images/Infotechnology/infotechnology_6.png',
    },
  ];

  search = '';
  currentBannerIndex = 0;

  constructor(private videoService: VideoService) { }

  ngOnInit() { }
isVideoPlaying = false; // Agregar esta línea

handleClick(index: number) {
  console.log(`Clicked on index: ${index}`);
  const videoUrl = this.bannerSliderList[index].videoUrl;
  const videoPlayer = this.videoPlayer.nativeElement;

  // Pause all other videos
  this.bannerSliderList.forEach(item => item.playing = false);

  // Show the video
  this.bannerSliderList[index].playing = true;
  this.currentBannerIndex = index;

  if (videoPlayer) {
    videoPlayer.src = videoUrl;
    videoPlayer.play();
  }
}

handleVideoEnded() {
  // Hide the video
  this.bannerSliderList[this.currentBannerIndex].playing = false;
}

handleVideoError() {
  const swiper = this.swiperRef?.nativeElement.swiper;
  if (swiper) {
    // Enable swiper in case of video playback error
    swiper.allowTouchMove = true;
    this.isVideoPlaying = false;
    swiper.slideTo(this.currentBannerIndex, 0); // Show current slide
  }
}

handleSlideChange(event: any) {
  const videoPlayer = this.videoPlayer.nativeElement;
  if (this.isVideoPlaying && !videoPlayer.paused) {
    // If video is playing and user tries to change slide, stop the video
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    const swiper = this.swiperRef?.nativeElement.swiper;
    if (swiper) {
      swiper.allowTouchMove = true;
      this.isVideoPlaying = false;
    }
  }
}
playTrendyVideo() {
  setTimeout(() => {
    this.horizontalDivs?.map((div: any) => {
      if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
        div?.nativeElement.play();
      }
    });
  },);

}
}