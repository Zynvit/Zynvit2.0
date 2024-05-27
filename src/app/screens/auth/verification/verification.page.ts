import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  showLoadingDialog = false;
  otpValue = '0';
  config: NgOtpInputConfig = {
    length: 4, allowNumbersOnly: true,
    inputStyles: {
      'height': '58px',
      'width': '58px',
      'border-radius': '5px',
      'color': 'var(--whiteColor)',
      'background': 'rgba(255, 255, 255, 0.3)',
      'border-color': 'transparent',
      'font-size': '22px',
      'font-weight': '700'
    },
    inputClass: 'each_input',
    containerStyles: {
      'justify-content': 'space-between',
      'display': 'flex',
      'margin': '0 20px',
      'margin-top': '60px',
      'margin-bottom': '40px'
    }
  }

  constructor(public platform: Platform, public router: Router,
    private navCtrl: NavController,
    private mdlCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

  goBack() {
    this.navCtrl.back()
  }

  onContinue() {
    this.showLoadingDialog = true
    setTimeout(() => {
      this.showLoadingDialog = false;
      this.mdlCtrl.dismiss();
      this.router.navigateByUrl('/bottom-tab-bar/search')
    }, 2000);
  }

  onChange(event: any) {
    this.otpValue = event;
    if (event.length === 4) {
      this.showLoadingDialog = true
      setTimeout(() => {
        this.showLoadingDialog = false;
        this.mdlCtrl.dismiss();
        this.router.navigateByUrl('/bottom-tab-bar/search')
      }, 2000);
    }
  }
}
