import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-video-maker-profile',
  templateUrl: './video-maker-profile.page.html',
  styleUrls: ['./video-maker-profile.page.scss'],
})
export class VideoMakerProfilePage implements OnInit {

  postsImagesList = [
    {
      id: '1',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '2',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '3',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '4',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '5',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '6',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '7',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '8',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '9',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '10',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '11',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '12',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '13',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '14',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '15',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '16',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '17',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '18',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '19',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '20',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '21',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '22',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '23',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '24',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
  ];

  favoriteImagesList = [
    {
      id: '24',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '23',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '22',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '21',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '20',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '19',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '18',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '17',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '16',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '15',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '14',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '13',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '12',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '11',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '10',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '9',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '8',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '7',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '6',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '5',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '4',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '3',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '2',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '1',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
  ];

  bookmarkedImagesList = [
    {
      id: '5',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '6',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '7',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '8',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '9',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '10',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '11',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '12',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
    {
      id: '13',
      image: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '14',
      image: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '15',
      image: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '16',
      image: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '17',
      image: '../../../assets/images/dance/dance_5.jpg',
    },
    {
      id: '18',
      image: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '19',
      image: '../../../assets/images/laugh/laugh_1.jpg',
    },
    {
      id: '20',
      image: '../../../assets/images/laugh/laugh_2.jpg',
    },
    {
      id: '21',
      image: '../../../assets/images/laugh/laugh_3.jpg',
    },
    {
      id: '22',
      image: '../../../assets/images/laugh/laugh_4.jpg',
    },
    {
      id: '23',
      image: '../../../assets/images/laugh/laugh_5.jpg',
    },
    {
      id: '24',
      image: '../../../assets/images/laugh/laugh_6.jpg',
    },
  ];

  scrollValue = 0;
  isFollow = false;
  selectedTabIndex = 0;

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  handleScroll(ev: CustomEvent) {
    this.scrollValue = ev.detail.scrollTop;
  }

  goBack() {
    this.navCtrl.back();
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }
}
