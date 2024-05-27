import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  @ViewChild('textArea') textArea: any;
  @ViewChild(IonContent) content: IonContent | undefined;
  newMsg = '';
  platform: any;

  messagesList = [
    {
      id: '1',
      message: 'Hello',
      time: '9:35 AM',
      isSender: false,
    },
    {
      id: '2',
      message: 'Hi',
      time: '9:36 AM',
      isSender: true,
      isSeen: true,
    },
    {
      id: '3',
      message: 'How are you?',
      time: '9:38 AM',
      isSender: false,
    },
    {
      id: '4',
      message: 'I\'m fine.How are you?',
      time: '9:38 AM',
      isSender: true,
      isSeen: false,
    },
  ]

  constructor(private navCtrl: NavController, private plt: Platform) {
    this.platform = plt;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back()
  }

  addMessage() {
    if (this.newMsg) {
      let date = Date();
      let hour = (new Date(date)).getHours();
      let minute = (new Date(date)).getMinutes();
      let AmPm = hour >= 12 ? 'PM' : 'AM';
      let finalhour = hour > 12 ? (hour - 12) : hour;

      const newMessage = {
        id: (this.messagesList.length + 1).toString(),
        message: this.newMsg,
        time: `${finalhour}:${minute} ${AmPm}`,
        isSender: true,
        isSeen: false,
      }

      this.messagesList.push(newMessage);
      this.newMsg = '';
      setTimeout(() => {
        this.content?.scrollToBottom(500)
      });
      this.textArea.setFocus();
    }
  }

}
