import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import * as intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  screenWidh = window.innerWidth;
  separateDialCode = false;
  myForm: FormGroup;
  phoneNumber: any;

  constructor(public platform: Platform, private routerOutlet: IonRouterOutlet, private router: Router, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      phone: [undefined, [Validators.required]],
    });
  }

  ngOnInit() {
    const inputElement = document.getElementById('phone');
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: 'US',
        separateDialCode: true,

        customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
          return "Mobile Number";
        },
        preferredCountries: ['us'],
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.0/js/utils.js"
      });
    }
  }

  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
  }

  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

}
