import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  menu = [
    {
      title: 'Change Password',
    },
    {
      title: 'Notifications',
    },
    {
      title: 'Awesome Setting',
    },
    {
      title: 'Change Language',
    },
    {
      title: 'Get Help',
    },
    {
      title: 'Reports Issues',
    },
    {
      title: 'Terms and Conditions',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
