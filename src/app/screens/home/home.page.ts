import { Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  @ViewChildren("video") divs?: QueryList<any>

  @ViewChildren("horizontalVideo") horizontalDivs?: QueryList<any>
  @ViewChild('horizontalSwiper') horizontalSwiperRef: ElementRef | undefined;

  horizontalCurrentIndex = 0;

  currentIndex = 0;

  postsList = [
    {
      id: '1',
      videoUrl: '../../../assets/videos/vod_1.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel  #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
    {
      id: '2',
      videoUrl: '../../../assets/videos/natureView.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel Tower #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
    {
      id: '3',
      videoUrl: '../../../assets/videos/seaView.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel Tower #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
    {
      id: '4',
      videoUrl: '../../../assets/videos/roadView.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel Tower #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
    {
      id: '5',
      videoUrl: '../../../assets/videos/vod_1.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel Tower #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
    {
      id: '6',
      videoUrl: '../../../assets/videos/natureView.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel Tower #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
    {
      id: '7',
      videoUrl: '../../../assets/videos/seaView.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel Tower #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
    {
      id: '8',
      videoUrl: '../../../assets/videos/roadView.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postLikes: '427.9K',
      isLike: false,
      postComments: '2051',
      postUserName: 'saraalikhan',
      postDescription: 'Eiffel Tower #beautiful',
      postSongName: 'R10 - Oboy',
      postSongImage: '../../../assets/images/oboy.jpg',
      isPlay: false,
    },
  ];

  trendyCreatorsList = [
    {
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postShortUserName: 'Nanotechnolog',
      postUserName: 'saraalikhan',
    },
    {
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postShortUserName: 'Nanotechnology',
      postUserName: 'saraalikhan',
    },
    {
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postShortUserName: 'Nanotechnology',
      postUserName: 'saraalikhan',
    },
    {
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postShortUserName: 'Nanotechnology',
      postUserName: 'saraalikhan',
    },
    {
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postShortUserName: 'Nanotechnology',
      postUserName: 'saraalikhan',
    },
    {
      videoUrl: 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4',
      profilePicture: '../../../assets/images/spook.png',
      postShortUserName: 'Nanotechnology',
      postUserName: 'saraalikhan',
    },
  ];

  relatedPost = false;

  constructor(public platform: Platform, private router: Router) { }

  ionViewWillLeave() {
    if (this.relatedPost) {
      this.horizontalDivs?.map((div: any) => {
        if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
          div?.nativeElement.pause();
        }
      });
    }
    else {
      this.divs?.map((div: any) => {
        if (div.nativeElement.id == `video${this.currentIndex}`) {
          div?.nativeElement.pause();
          this.postsList[this.currentIndex].isPlay = false;
        }
      });
    }
  }

  ionViewWillEnter() {
    if (this.relatedPost) {
      this.horizontalDivs?.map((div: any) => {
        if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
          div?.nativeElement.play();
        }
      });
    }
    else {
      this.divs?.map((div: any) => {
        if (div.nativeElement.id == `video${this.currentIndex}`) {
          this.postsList[this.currentIndex].isPlay = false;
          div?.nativeElement.play();
          this.postsList[this.currentIndex].isPlay = true;
        }
      });
    }
  }

  ngAfterViewInit() {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video0`) {
        div?.nativeElement.play();
        this.postsList[0].isPlay = true;
      }
    });
  }

  ngOnInit() {
     const postIndex = this.postsList.findIndex(p => p.id === '1');
  if (postIndex !== -1) {
    this.postsList[postIndex].videoUrl = 'https://res.cloudinary.com/dhke2acxq/video/upload/v1715646766/cc7-1_fhwc0e.mp4';
  }
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

  toggleVideo(index: any) {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${index}`) {
        div?.nativeElement.paused ? div?.nativeElement.play() : div?.nativeElement.pause();
        if (!div?.nativeElement.paused) {
          this.postsList[index].isPlay = true;
        }
        else {
          this.postsList[index].isPlay = false;
        }
      }
    });
  }

  getStatus(index: any) {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${index}`) {
        return div?.nativeElement.paused
      }
    });
  }

  onForYouSelected(type: any) {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${this.currentIndex}`) {
        if (type === 'playVideo') {
          div?.nativeElement.play();
          this.postsList[this.currentIndex].isPlay = true;
        }
        else {
          div?.nativeElement.pause();
          this.postsList[this.currentIndex].isPlay = false;
        }
      }
    });
  }

  toggleRelatedPost(val: boolean) {
    this.relatedPost = val;
  }

  playCurrentVideo() {
    setTimeout(() => {
      this.divs?.map((div: any) => {
        if (div.nativeElement.id == `video${this.currentIndex}`) {
          div?.nativeElement.play();
          this.postsList[this.currentIndex].isPlay = true;
        }
      });
    },);
  }

  pauseCurrentVido() {
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${this.currentIndex}`) {
        div?.nativeElement.pause();
        this.postsList[this.currentIndex].isPlay = false;
      }
    });
  }

  slideChangeCall() {
    const prevIndex = this.swiperRef?.nativeElement.swiper.previousIndex;
    const newIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
    this.currentIndex = this.swiperRef?.nativeElement.swiper.activeIndex;
    this.divs?.map((div: any) => {
      if (div.nativeElement.id == `video${prevIndex}`) {
        div?.nativeElement.pause();
        this.postsList[prevIndex].isPlay = false;
      }
      if (div.nativeElement.id == `video${newIndex}`) {
        div?.nativeElement.play();
        this.postsList[newIndex].isPlay = true;
      }
    });
  }

  horizontalSlideChangeCall() {
    const prevIndex = this.horizontalSwiperRef?.nativeElement.swiper.previousIndex;
    const newIndex = this.horizontalSwiperRef?.nativeElement.swiper.activeIndex;
    this.horizontalCurrentIndex = this.horizontalSwiperRef?.nativeElement.swiper.activeIndex;
    this.horizontalDivs?.map((div: any) => {
      if (div.nativeElement.id == `horizontalVideo${prevIndex}`) {
        div?.nativeElement.pause();
      }
      if (div.nativeElement.id == `horizontalVideo${newIndex}`) {
        div?.nativeElement.play();
      }
    });
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

  pauseTrendyVideo() {
    this.horizontalDivs?.map((div: any) => {
      if (div.nativeElement.id == `horizontalVideo${this.horizontalCurrentIndex}`) {
        div?.nativeElement.pause();
      }
    });
  }
  

}
