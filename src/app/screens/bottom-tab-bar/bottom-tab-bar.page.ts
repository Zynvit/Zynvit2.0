import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-bottom-tab-bar',
  templateUrl: './bottom-tab-bar.page.html',
  styleUrls: ['./bottom-tab-bar.page.scss'],
})
export class BottomTabBarPage implements OnInit {

  isIos: any;
  closed$ = new Subject<any>();
  showTabs = true;

  constructor(private router: Router,private routerOutlet:IonRouterOutlet) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe((event: any) => {
      if (event['url'] === '/bottom-tab-bar/upload') {
        this.showTabs = false;
      }
      else {
        this.showTabs = true;
      }
    });
  }

  ionViewDidEnter() {
    this.routerOutlet.swipeGesture = false;
  }

  ionViewWillLeave() {
    this.routerOutlet.swipeGesture = true;
  }

}
