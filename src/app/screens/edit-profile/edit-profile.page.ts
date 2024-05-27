import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  showPhoneDialog = false;
  phoneNumber = '9603456878';
  filnalPhoneNumber = '9603456878';

  showEmailDialog = false;
  email = 'test@gmail.com';
  finalEmail = 'test@gmail.com';

  showPasswordDialog = false;
  password = '';
  finalPassword = '12456';

  showUrlDialog = false;
  url = '';
  finalUrl = '';

  public actionSheetButtons = [
    {
      text: 'Camera',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Choose from Gallery',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  constructor(public modalCtrl: ModalController, private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

  goBack() {
    this.navCtrl.back()
  }

}
