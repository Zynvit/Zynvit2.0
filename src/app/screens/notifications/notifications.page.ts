import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notificationsSelected = true;

  notificationsList = [
    {
      id: '1',
      profileImageOfOther: '../../../assets/images/user_profile/user_1.jpg',
      nameOfOther: 'Robert Junior',
      isLiked: true,
      timeOfResponse: '7m ago',
      post: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '2',
      profileImageOfOther: '../../../assets/images/user_profile/user_2.jpg',
      nameOfOther: 'Don Hart',
      isLiked: true,
      timeOfResponse: '7m ago',
      post: '../../../assets/images/dance/dance_2.jpg',
    },
    {
      id: '3',
      profileImageOfOther: '../../../assets/images/user_profile/user_3.jpg',
      nameOfOther: 'Emili Williamson',
      isLiked: false,
      timeOfResponse: '8m ago',
      post: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '4',
      profileImageOfOther: '../../../assets/images/user_profile/user_4.jpg',
      nameOfOther: 'Ema Waston',
      isLiked: false,
      timeOfResponse: '9m ago',
      post: '../../../assets/images/dance/dance_4.jpg',
    },
    {
      id: '5',
      profileImageOfOther: '../../../assets/images/user_profile/user_5.jpg',
      nameOfOther: 'Rosy Gold',
      isLiked: true,
      timeOfResponse: '11m ago',
      post: '../../../assets/images/dance/dance_1.jpg',
    },
    {
      id: '6',
      profileImageOfOther: '../../../assets/images/user_profile/user_1.jpg',
      nameOfOther: 'Robert Junior',
      isLiked: false,
      timeOfResponse: '13m ago',
      post: '../../../assets/images/dance/dance_6.jpg',
    },
    {
      id: '7',
      profileImageOfOther: '../../../assets/images/user_profile/user_3.jpg',
      nameOfOther: 'Emili Williamson',
      isLiked: true,
      timeOfResponse: '15m ago',
      post: '../../../assets/images/dance/dance_3.jpg',
    },
    {
      id: '8',
      profileImageOfOther: '../../../assets/images/user_profile/user_4.jpg',
      nameOfOther: 'Ema Waston',
      isLiked: true,
      timeOfResponse: '16m ago',
      post: '../../../assets/images/dance/dance_4.jpg',
    }
  ];

  messagesList = [
    {
      id: '1',
      profileImageOfSender: '../../../assets/images/user_profile/user_3.jpg',
      nameOfSender: 'Ellison Perry',
      lastMessage: 'Hey, How are you?',
      receiveTime: '1d ago',
      isReadable: true,
    },
    {
      id: '2',
      profileImageOfSender: '../../../assets/images/user_profile/user_1.jpg',
      nameOfSender: 'Mark Perry',
      lastMessage: 'You\'re so funny',
      receiveTime: '2d ago',
    },
    {
      id: '3',
      profileImageOfSender: '../../../assets/images/user_profile/user_2.jpg',
      nameOfSender: 'Robert Junior',
      lastMessage: 'Hello beautiful',
      receiveTime: '2d ago',
    },
    {
      id: '4',
      profileImageOfSender: '../../../assets/images/user_profile/user_4.jpg',
      nameOfSender: 'Emma Waston',
      lastMessage: 'I miss you very badly',
      receiveTime: '3d ago',
      isReadable: true,
    },
    {
      id: '5',
      profileImageOfSender: '../../../assets/images/user_profile/user_5.jpg',
      nameOfSender: 'Emily Hemsworth',
      lastMessage: 'Can we meet today?',
      receiveTime: '6d ago',
    },
    {
      id: '6',
      profileImageOfSender: '../../../assets/images/user_profile/user_6.jpg',
      nameOfSender: 'Rocky Waton',
      lastMessage: 'Hi sweatheart',
      receiveTime: '1w ago',
    },
    {
      id: '7',
      profileImageOfSender: '../../../assets/images/user_profile/user_7.jpg',
      nameOfSender: 'Cris Maxwell',
      lastMessage: 'How are you today?',
      receiveTime: '1w ago',
    },
    {
      id: '8',
      profileImageOfSender: '../../../assets/images/user_profile/user_8.jpg',
      nameOfSender: 'David Lynn',
      lastMessage: 'Oh my god!',
      receiveTime: '2w ago',
      isReadable: true,
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(screen: any) {
    this.router.navigateByUrl(screen);
  }

}
