import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { NavController, Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tap = 0;

  constructor(
    private platform: Platform,
    private router: Router,
    private location: Location,
    private navCtrl: NavController,
  ) {
    this.intializeApp();
    this.backButtonEvent();
  }

  ngOnInit() {
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      if (
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/home') ||
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/search') ||
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/notifications')||
        this.location.isCurrentPathEqualTo('/bottom-tab-bar/profile')||
        this.location.isCurrentPathEqualTo('/auth/login')
      ) {
        this.tap++;
        if (this.tap == 2) {
          App.exitApp();
        }
        else {
          setTimeout(() => {
            this.tap = 0;
          }, 2000);
        }
      }
      else {
        if (this.location.isCurrentPathEqualTo('/subscription-done')) {
          this.router.navigateByUrl('/bottom-tab-bar/home')
        }
        else {
          this.navCtrl.back()
        }
      }
    });
  }
  intializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        // Configuraciones específicas para plataformas iOS y Android.
        StatusBar.setBackgroundColor({ color: '#000000' });
        StatusBar.setStyle({ style: Style.Dark });
      } else {
        // Información adicional para cuando la app se ejecuta en un navegador web.
        console.log('StatusBar operations are not supported on the web.');
      }
    });
  }
}
