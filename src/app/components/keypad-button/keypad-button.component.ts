import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-keypad-button',
  templateUrl: './keypad-button.component.html',
  styleUrls: ['./keypad-button.component.scss'],
})
export class KeypadButtonComponent implements OnInit {

  @Input() key: number;

  constructor() { }

  ngOnInit() {}

}
