import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eStudentMobile';

  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home',
    },
    {
      title: 'Register student',
      url: '/register',
      icon: 'person',
    },
    {
      title: 'Diary',
      url: '/diary',
      icon: 'calendar_today',
    },
    {
      title: 'News',
      url: '/news',
      icon: 'business',
    },
    {
      title: 'Messages',
      url: '/messageslist',
      icon: 'message',
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help',
    },
    {
      title: 'ContactUs',
      url: '/contact',
      icon: 'contact_phone',
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person',
    },
  ];

  login() {}
}
