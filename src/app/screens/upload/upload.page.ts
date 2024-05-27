import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  selectFilter = true;

  coverColorsList = [
    'rgba(255,0,0,0.2)',
    'rgba(46, 89, 132, 0.55)',
    'rgba(255, 150, 22, 0.4)',
    'rgba(93, 187, 99, 0.4)',
    'rgba(254, 226, 39, 0.3)',
    'rgba(199, 21, 133, 0.4)',
    'rgba(190, 45, 0, 0.4)',
    'rgba(8, 4, 179, 0.25)',
    'rgba(152, 152, 152, 0.4)',
  ];

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.selectFilter = false;
  }

  goBack() {
    this.navCtrl.back();
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

}
